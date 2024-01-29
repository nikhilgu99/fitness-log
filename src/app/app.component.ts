import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ExerciseItemComponent } from "./exercise-item/exercise-item.component";
import { FitnessItem } from './interfaces/fitness-item';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NgFor, RouterOutlet, HeaderComponent, ExerciseItemComponent]
})
export class AppComponent {
    public fitnessItems: FitnessItem[] = [ //Mock entries
        {
            description: "Ran 2 miles in 20 minutes",
            name: "Running"
        },
        {
            description: "Did 30 pushups in a minute",
            name: "Pushups"
        },
        {
            description: "Did 40 crunches in a minute",
            name: "Crunches"
        },
        {
            description: "Held for 1 minute",
            name: "Plank"
        },
    ];

    addSuccess: boolean | undefined = undefined;

    public addEntry(entry: FitnessItem) {
        if (this.fitnessItems.filter( item => item.name == entry.name).length == 0) { //Check for duplicate
            this.fitnessItems.push(entry);
            this.addSuccess = true;
        } else {
            this.addSuccess = false;
        }
    }

    public deleteEntry(name: string) {
        this.fitnessItems = this.fitnessItems.filter( item => item.name !== name);
    }
}
