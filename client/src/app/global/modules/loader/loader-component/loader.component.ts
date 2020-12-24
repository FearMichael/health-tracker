import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../LoaderService/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public visible = false;

  constructor(
    private loaderService: LoaderService,
  ) { }

  public ngOnInit(): void {
    this.loaderService.show$.subscribe(s => this.visible = s);
  }

}
