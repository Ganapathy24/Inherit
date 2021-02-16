import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';

export interface Languages {
  name: string;
}

@Component({
  selector: 'app-import-project',
  templateUrl: './import-project.component.html',
  styleUrls: ['./import-project.component.scss']
})


export class ImportProjectComponent implements OnInit {

  constructor() {
  }

  projectName: string;
  description: string;
  uploadFiles: any;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  languagesUsed: Languages[] = new Array();

  files: any = [];

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#f5fcff';
  @HostBinding('style.opacity') private opacity = '1';

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.languagesUsed.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Languages): void {
    const index = this.languagesUsed.indexOf(fruit);

    if (index >= 0) {
      this.languagesUsed.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8';
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  public ondrop(evt: { preventDefault: () => void; stopPropagation: () => void; dataTransfer: { files: any; }; }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

  uploadFile(event: string | any[]): void {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
    }
  }

  deleteAttachment(index: any): void {
    this.files.splice(index, 1);
  }

}



