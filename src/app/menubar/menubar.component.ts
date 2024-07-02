import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router){}

  ngOnInit() {
    this.items = [
      {
        label: 'Ana Sayfa',
        icon: 'pi pi-home',
        routerLink:'/'
    },
      
        {
            label: 'Sepetlerim',
            icon: 'pi pi-shopping-cart',
            items: [
                {
                    label: 'Sepet1',
                    icon: 'pi pi-shopping-cart',
                    command: () => {
                      this.router.navigate(['/cart']);
                },
              },
                {
                    label: 'Sepet2',
                    icon: 'pi pi-shopping-cart'
                },
                
            ]
        },
        {
          label: 'Favorilerim',
          icon: 'pi pi-heart',
          routerLink:'/favoriler'
      },
        
    ]
}
}


