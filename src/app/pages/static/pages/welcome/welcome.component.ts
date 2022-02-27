import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  products!: any[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    // this.http.get(`${environment.url}/api/Producto?pageIndex=1&pageSize=5`).subscribe((response: any) => {
    //   this.products = response.data;
    // }, error => {
    //   console.log(error);
    // })


    this.http.get(`${environment.url}/api/Producto?pageIndex=1&pageSize=10`).subscribe({
      next: (response:any) => {
        this.products = response.data;
      },
      error: (err:any) => {
        console.log(err);
      },
      complete: () => {
        console.log('completado');
      }
    })

    
  }

}
