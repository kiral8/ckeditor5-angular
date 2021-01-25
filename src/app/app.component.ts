import { Component } from '@angular/core';

import * as customBuild from '../assets/ckeditor5/build/ckEditor';

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
    toolbar: {
      items: [
        'heading', '|',
        'bold', 'italic', 'strikethrough', 'underline', 'link', '|',
        'alignment', 'outdent', 'indent', '|',
        'bulletedList', 'numberedList', '-',
        'imageUpload', 'blockQuote', 'insertTable',
        'undo', 'redo'
      ],
      viewportTopOffset: 30,
      shouldNotGroupWhenFull: true
    },
    language: 'es',
    image: {
      styles: [
        'alignLeft', 'alignCenter', 'alignRight'
      ],
      toolbar: [
        'imageResize:50',
        'imageResize:original',

        'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
        // 'imageStyle:full',
        // 'imageStyle:side',
        '|',
        'imageTextAlternative',
        '|',
        'linkImage'
      ],
      resizeOptions: [
        {
          name: 'imageResize:original',
          value: null,
          icon: 'original'
        },
        {
          name: 'imageResize:50',
          value: '50',
          icon: 'medium'
        }
      ],
    }
  }


  onReady(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new UploadAdapter(loader);
    };
  }

}


export class UploadAdapter {
  loader: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  async upload() {
    return this.loader.file.then(async (file: File) => {
      return { default: `https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/04/05224508/nota-totoro-10.jpg` };
    });
  }

  abort() {
    console.log('UploadAdapter abort');
  }
}

