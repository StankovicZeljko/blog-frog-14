import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NgForm,
  UntypedFormControl,
  UntypedFormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog, BlogService } from './services/blog.service';
import { AddBlogState, BlogState } from './state/add-blog-state';

@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.scss'],
})
export class AddBlogPageComponent implements OnInit {
  form!: UntypedFormGroup;

  state$: Observable<BlogState>;

  constructor(
    private blogService: BlogService,
    private addblogState: AddBlogState,
    private router: Router
  ) {
    this.state$ = this.addblogState.state$;
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      blogdata: new UntypedFormGroup({
        title: new UntypedFormControl(
          'an existing title',
          [
            Validators.required,
            Validators.pattern('^[A-Z]+(.)*'),
            this.customValidator,
          ],
          this.customAsyncValidator
        ),
        content: new UntypedFormControl(null, [Validators.required]),
      }),
    });
  }

  onSubmit() {
    console.log(this.form);
    this.validateAllFormFields(this.form);

    if(this.form.valid) {
      this.addBlog(this.form.value.blogdata);
    }
  }

  customValidator(control: UntypedFormControl): ValidationErrors | null {
    if (control.value === 'Test') {
      return { custom: true };
    }
    return null;
  }

  customAsyncValidator(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        if (control.value === 'Test Async') {
          resolve({ customAsync: true });
        }
        resolve(null);
      });
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  async addBlog(blog: Blog) {
    this.addblogState.setState({ loading: true });

    try {
      const result = await this.blogService.addBlog(blog);
      // this.addblogState.setState({ loading: false, });
      this.router.navigate(['/overview']);
    } catch (error) {
      this.addblogState.setState({
        loading: false,
        error: (error as Error).message,
      });
    }
  }
}
