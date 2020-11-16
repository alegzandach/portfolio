import { HomeComponent } from './home/home.component'
import { GifContainer } from './pages/projects/gif-container/gif-container.component'
import { GifSynthComponent } from './synths/gif/gif-synth/gif-synth.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: 'projects/gifsynth/select',
        component: GifContainer
    },
    {
        path: 'projects/gifsynth/select/play',
        component: GifSynthComponent
    },
    { 
        path: '**',
        component: HomeComponent
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}