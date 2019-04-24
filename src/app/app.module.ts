import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// primeng components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';

// app components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { TemplateComponent } from './components/template/template/template.component';
import { AuthGuard } from './routes/authguard/auth.guard';
import { HomeComponent } from './components/template/home/home.component';
import { ErrorMsgComponent } from './components/messages/error-msg/error-msg.component';
import { HttpConfigInterceptor } from './components/interceptors/http-config.interceptor';
import { TableFrontComponent } from './components/tables/table-front/table-front.component';
import { OutletComponent } from './components/outlet/outlet.component';

//router
import { routing } from './routes/app-route';

//keycloak
import { KeycloakService, KeycloakAngularModule, KeycloakBearerInterceptor } from 'keycloak-angular';
import { initializer } from './utils/app-init';

//pages
import { TesteComponent } from './pages/teste/teste.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { GerarContaDialogComponent } from './dialogs/gerar-conta-dialog/gerar-conta-dialog.component';
import { TabMenuComponent } from './components/template/tab-menu/tab-menu.component';
import { CadastrarEmpresaComponent } from './pages/empresa/empresa/cadastrar-empresa/cadastrar-empresa.component';
import { ListaProdutoComponent } from './pages/empresa/produto/lista-produto/lista-produto.component';
import { CadastrarProdutoComponent } from './pages/empresa/produto/cadastrar-produto/cadastrar-produto.component';
import { ListaFuncionalidadeComponent } from './pages/empresa/funcionalidade/lista-funcionalidade/lista-funcionalidade.component';
import { CadastrarFuncionalidadeComponent } from './pages/empresa/funcionalidade/cadastrar-funcionalidade/cadastrar-funcionalidade.component';
import { ListaProjetoDeTesteComponent } from './pages/projeto-de-teste/lista-projeto-de-teste/lista-projeto-de-teste.component';
import { CadastrarProjetoDeTesteComponent } from './pages/projeto-de-teste/cadastrar-projeto-de-teste/cadastrar-projeto-de-teste.component';
import { ListaEmpresaComponent } from './pages/empresa/empresa/lista-empresa/lista-empresa.component';
import { ListaFornecedorComponent } from './pages/empresa/fornecedor/lista-fornecedor/lista-fornecedor.component';
import { ListaPlanoDeTesteComponent } from './pages/plano-de-teste/plano-de-teste/lista-plano-de-teste/lista-plano-de-teste.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TemplateComponent,
    TesteComponent,
    HomeComponent,
    FooterComponent,
    ErrorMsgComponent,
    GerarContaDialogComponent,
    TabMenuComponent,
    CadastrarEmpresaComponent,
    ListaProdutoComponent,
    CadastrarProdutoComponent,
    ListaFuncionalidadeComponent,
    CadastrarFuncionalidadeComponent,
    ListaProjetoDeTesteComponent,
    CadastrarProjetoDeTesteComponent,
    ListaEmpresaComponent,
    ListaFornecedorComponent,
    ListaPlanoDeTesteComponent,
    OutletComponent,
    TableFrontComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    PanelModule,
    routing,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MessageModule,
    AutoCompleteModule,
    TooltipModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule,
    BreadcrumbModule,
    MenuModule,
    TabMenuModule,
    DropdownModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]

    },
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true
    },*/
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
    MessageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }