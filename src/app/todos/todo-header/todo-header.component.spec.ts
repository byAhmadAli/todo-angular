import { TestBed } from '@angular/core/testing';
import { TodosHeaderComponent } from './todo-header.component';

describe('TodosHeaderComponent', () => {
  const date = new Date();
  const weekday = new Array(
    'Sunday 🖖',
    'Monday 💪😀',
    'Tuesday 😜',
    'Wednesday 😌☕️',
    'Thursday 🤗',
    'Friday 🍻',
    'Saturday 😴'
  );
  const day = weekday[date.getDay()];

  const randomWordArray = Array(
    "Oh my, it's",
    "Whoop, it's",
    'Happy',
    "Seems it's",
    "Awesome, it's",
    'Have a nice',
    'Happy fabulous',
    'Enjoy your'
  );

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [TodosHeaderComponent],
    })
  );

  it('should load the component', () => {
    const fixture = TestBed.createComponent(TodosHeaderComponent);
    const todosHeaderComponent = fixture.componentInstance;
    expect(todosHeaderComponent).toBeTruthy();
  });

  it(`should have as random word`, () => {
    const fixture = TestBed.createComponent(TodosHeaderComponent);
    const todosHeaderComponent = fixture.componentInstance;
    
    expect(randomWordArray).toContain(todosHeaderComponent.randomWord);
  });

  it(`should have as day today`, () => {
    const fixture = TestBed.createComponent(TodosHeaderComponent);
    const todosHeaderComponent = fixture.componentInstance;

    expect(todosHeaderComponent.day).toEqual(day);
  });

  it('should render random word with today', () => {
    const fixture = TestBed.createComponent(TodosHeaderComponent);
    fixture.detectChanges();
    const todosHeaderComponent = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.random-word')?.textContent).toContain(`${todosHeaderComponent.randomWord} ${todosHeaderComponent.day}`);
  });
});
