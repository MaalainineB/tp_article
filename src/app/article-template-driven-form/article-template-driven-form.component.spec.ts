import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTemplateDrivenFormComponent } from './article-template-driven-form.component';

describe('ArticleTemplateDrivenFormComponent', () => {
  let component: ArticleTemplateDrivenFormComponent;
  let fixture: ComponentFixture<ArticleTemplateDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleTemplateDrivenFormComponent]
    });
    fixture = TestBed.createComponent(ArticleTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
