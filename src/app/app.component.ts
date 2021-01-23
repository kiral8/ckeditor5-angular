import { Component } from '@angular/core';

import * as customBuild from '../assets/ckCustomBuild/build/ckEditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ckeditor-angular';

  public htmlData: string = '<p>Hello, world!<p>';
  public Editor = customBuild;
  public config = {
    toolbar: [
      'heading', '|',
      'alignment',
      'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
      'indent', 'outdent', '|',
      'imageUpload', 'blockQuote', 'insertTable', 'mediaEmbed',
      'todoList',
      'undo', 'redo'
    ],
    language: 'es'
  }
}
