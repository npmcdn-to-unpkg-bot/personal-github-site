import { addProviders, async, inject } from "@angular/core/testing";
import { AppComponent } from "../../src/app/app.component";

describe("Component: AppComponent", () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it("should create the app",
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    })
  );

  it("should have as intro text 'Welcome to my GitHub site.' after OnInit",
    inject([AppComponent], (app: AppComponent) => {
      app.ngOnInit();
      expect(app.introText).toEqual("Welcome to my GitHub site.");
    })
  );

  it("should have one message",
    inject([AppComponent], (app: AppComponent) => {
      app.ngOnInit();
      expect(app.messages.length).toEqual(1);
    })
  );
});