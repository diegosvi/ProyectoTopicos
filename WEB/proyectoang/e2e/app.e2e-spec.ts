import { ProyectoangPage } from './app.po';

describe('proyectoang App', () => {
  let page: ProyectoangPage;

  beforeEach(() => {
    page = new ProyectoangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
