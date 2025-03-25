import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DialogComponent } from '../common/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { DialogService } from '../common/dialog/dialog.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonComponent } from '../common/button/button.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-upload-giphy',
  standalone: true,
  imports: [
    CommonModule,
    DialogComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './upload-giphy.component.html',
  styleUrl: './upload-giphy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService],
})
export class UploadGiphyComponent implements OnInit {
  data = inject(DynamicDialogConfig).data as { title: string };
  private readonly dialogRef = inject(DynamicDialogRef);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly dialogService = inject(DialogService);
  private readonly fb = inject(FormBuilder);

  formGroup!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = this.fb.group({
      title: [[this.data.title], [Validators.required]],
      url: ['', [Validators.required]],
      createBy: ['', [Validators.required]],
      createAt: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  handleSubmit(): void {
    console.log(this.formGroup.value);
  }

  handleCloseDialog() {
    this.dialogRef.close();
  }
}
