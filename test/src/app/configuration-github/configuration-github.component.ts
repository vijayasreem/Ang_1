import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-configuration-github',
  templateUrl: './configuration-github.component.html',
  styleUrls: ['./configuration-github.component.css']
})
export class ConfigurationGithubComponent implements OnInit {
  userStoryForm: FormGroup;
  userStories: any[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userStoryForm = this.fb.group({
      userStories: this.fb.array([])
    });

    // Fetch user stories from Jira API
    this.userStories = [
      {
        id: 1,
        title: 'User Story 1',
        description: 'User Story 1 Description',
        member: 'John Doe'
      },
      {
        id: 2,
        title: 'User Story 2',
        description: 'User Story 2 Description',
        member: 'Jane Doe'
      },
      {
        id: 3,
        title: 'User Story 3',
        description: 'User Story 3 Description',
        member: 'John Smith'
      }
    ];
  }

  onSubmit(): void {
    // Submit user stories
  }

}