import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ExperienceComponent } from './experience/experience.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SkillsComponent } from './skills/skills.component';
import { MatChipsModule } from '@angular/material/chips';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ContentComponent, ExperienceComponent, SkillsComponent, EducationComponent, HobbiesComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule
  ],
  exports:[ContentComponent]
})
export class ContentModule { }
