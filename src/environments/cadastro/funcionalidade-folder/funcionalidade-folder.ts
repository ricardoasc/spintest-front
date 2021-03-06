import { OutletComponent } from 'src/app/components/outlet/outlet.component';
import { ListaFuncionalidadeComponent } from 'src/app/pages/empresa/funcionalidade/lista-funcionalidade/lista-funcionalidade.component';
import { CadastrarFuncionalidadeComponent } from 'src/app/pages/empresa/funcionalidade/cadastrar-funcionalidade/cadastrar-funcionalidade.component';
import { Channels } from 'src/environments/channels';
import { AuthGuard } from 'src/app/routes/authguard/auth.guard';

export const FuncionalidadeFolder = {
    label: 'Funcionalidades',
    routerLink: 'func/listafuncionalidade',
    path: 'func',
    component: OutletComponent,
    crud: true,
    selectedResource: Channels.pages.cadastro.empresa.funcionalidade,
    canActivate: [AuthGuard],
    required: {
        required_list: [
            { 
                channel: Channels.pages.cadastro.empresa.produto, 
                msg: 'Selecione um produto!', 
                redirect: 'cadastro/empresa/prod/listaproduto' 
            }
        ]
    },
    children: [
        { 
            label: 'Lista Funcionalidades', 
            routerLink: 'listafuncionalidade', 
            path: 'listafuncionalidade', 
            component: ListaFuncionalidadeComponent,
            canActivate: [AuthGuard], 
            crudList: true 
        },
        { 
            label: 'Cadastro Funcionalidade', 
            routerLink: 'cadastrofuncionalidade', 
            path: 'cadastrofuncionalidade', 
            component: CadastrarFuncionalidadeComponent, 
            canActivate: [AuthGuard],
            crudForm: true 
        },
        { path: '**', pathMatch: 'full', redirectTo: 'listafuncionalidade' }
    ]
}