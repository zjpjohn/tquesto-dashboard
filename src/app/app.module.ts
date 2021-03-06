import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentChipsModule } from '@covalent/core';
import { CovalentFileModule } from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor,HttpConfig } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentJsonFormatterModule } from '@covalent/core';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';
import { CovalentDataTableModule } from '@covalent/core';
import { CovalentSearchModule } from '@covalent/core';
import { CovalentPagingModule } from '@covalent/core';

import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { EventModule } from './event/event.module';
import { ReportModule } from './report/report.module';
import { StaticModule } from './static/static.module';

import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { SpinnerService } from './shared/services/spinner.service';
import { ItemService } from './shared/services/item.service';
import { UserService } from './shared/services/user.service';
import { ConfigurationService } from './shared/services/configuration.service';

import { appRoutes, appRoutingProviders } from './app.routes';
import { RequestInterceptor } from './shared/utils/request.interceptor';
import { AppComponent } from './app.component';

const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentChipsModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHttpModule.forRoot(/*{
      inteceptors: [{
        interceptor: RequestInterceptor, paths: ['**']
      }]
    }*/),
    CovalentHighlightModule.forRoot(),
    CovalentJsonFormatterModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    appRoutes,
    UserModule,
    HomeModule,
    SharedModule,
    EventModule,
    ReportModule,
    StaticModule
  ],
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
    AuthService,
    AuthGuardService,
    SpinnerService,
    ItemService,
    UserService,
    ConfigurationService
  ],
  entryComponents: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
