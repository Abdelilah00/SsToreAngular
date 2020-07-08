import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AgmCoreModule} from '@agm/core';

import {FuseSharedModule} from '@fuse/shared.module';
import {FuseWidgetModule} from '@fuse/components/widget/widget.module';

import {EcommerceProductsComponent} from 'app/main/apps/e-commerce/product-list/products.component';
import {EcommerceProductsService} from 'app/main/apps/e-commerce/product-list/products.service';
import {ProductCreateComponent} from 'app/main/apps/e-commerce/product-create/product.component';
import {EcommerceProductService} from 'app/main/apps/e-commerce/product-create/product.service';
import {EcommerceOrdersComponent} from 'app/main/apps/e-commerce/order-list/orders.component';
import {EcommerceOrdersService} from 'app/main/apps/e-commerce/order-list/orders.service';
import {EcommerceOrderComponent} from 'app/main/apps/e-commerce/order/order.component';
import {EcommerceOrderService} from 'app/main/apps/e-commerce/order/order.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ProductUpdateComponent} from './product-update/product.component';
import {GridModule, SharedModule} from '@progress/kendo-angular-grid';

const routes: Routes = [
    {
        path: 'products',
        component: EcommerceProductsComponent,
        resolve: {
            data: EcommerceProductsService
        }
    },
    {
        path: 'products/:id',
        component: ProductCreateComponent,
        resolve: {
            data: EcommerceProductService
        }
    },
    {
        path: 'products/:id/:handle',
        component: ProductCreateComponent,
        resolve: {
            data: EcommerceProductService
        }
    },
    {
        path: 'orders',
        component: EcommerceOrdersComponent,
        resolve: {
            data: EcommerceOrdersService
        }
    },
    {
        path: 'orders/:id',
        component: EcommerceOrderComponent,
        resolve: {
            data: EcommerceOrderService
        }
    }
];

@NgModule({
    declarations: [
        EcommerceProductsComponent,
        ProductCreateComponent,
        ProductUpdateComponent,
        EcommerceOrdersComponent,
        EcommerceOrderComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        FuseSharedModule,
        FuseWidgetModule,
        MatAutocompleteModule,
        GridModule,
        SharedModule,
    ],
    providers: [
        EcommerceProductsService,
        EcommerceProductService,
        EcommerceOrdersService,
        EcommerceOrderService
    ]
})
export class EcommerceModule {
}
