import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file-example',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './upload-file-example.component.html',
  styleUrl: './upload-file-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFileExampleComponent implements OnInit{


  ngOnInit(): void {

  }

 }
