import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { ProductCatalog } from './product-catalog/product-catalog';
import { CustomerGroup } from './customer-group/customer-group';

@NgModule({
  declarations: [App, ServiceProductImageEvent, ServiceProductImageEventDetail, ProductCatalog, CustomerGroup],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App]
})
export class AppModule { }