# TeslaConfigurator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

javascript:void(window.open("","dp_debugger","width=600,height=600,location=0,menubar=0,status=1,toolbar=0,resizable=1,scrollbars=1").document.write("<script language='JavaScript' id=dbg src='https://www.adobetag.com/d1/digitalpulsedebugger/live/DPD.js'></"+"script>"));




<style>
.process-module {
  border: 1px solid #ccc;
  display: flex;
  max-width: 722px;
  flex-direction: column;
  font-family: Foundation Sans, sans-serif;
  justify-content: start;
  padding: 50px;
}

@media (max-width: 991px) {
  .process-module {
    padding: 0 20px;
  }
}

.module-header {
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 28px;
  color: #333;
  font-weight: 300;
  line-height: 1;
}

@media (max-width: 991px) {
  .module-header {
    max-width: 100%;
  }
}

.headline {
  align-self: stretch;
  flex: 1;
  width: 100%;
  gap: 10px;
}

@media (max-width: 991px) {
  .headline {
    max-width: 100%;
  }
}

.process-steps {
  display: flex;
  margin-top: 30px;
  width: 100%;
  gap: 30px;
  justify-content: start;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .process-steps {
    max-width: 100%;
  }
}

.step {
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  flex-basis: 0%;
}

.step-header {
  justify-content: center;
  border-radius: 8px 8px 0 0;
  background-color: #4d4d4d;
  display: flex;
  min-height: 72px;
  width: 100%;
  flex-direction: column;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  line-height: 1.2;
  padding: 21px 30px;
}

@media (max-width: 991px) {
  .step-header {
    padding: 0 20px;
  }
}

.step-title {
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: start;
}

.step-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  margin: auto 0;
}

.step-name {
  width: 166px;
}

.step-content {
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(204, 204, 204, 0.8);
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
}

@media (max-width: 991px) {
  .step-content {
    padding: 0 20px;
  }
}

.step-description {
  width: 100%;
  padding-bottom: 30px;
  font-size: 14px;
  color: #333;
  font-weight: 400;
  line-height: 18px;
}

.step-action {
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  justify-content: start;
}

@media (max-width: 991px) {
  .step-action {
    white-space: initial;
  }
}

.primary-btn {
  align-self: stretch;
  flex: 1;
  border-radius: 4px;
  background-color: #003cb3;
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.6);
  min-height: 52px;
  width: 100%;
  overflow: hidden;
  padding: 0 15px;
}

@media (max-width: 991px) {
  .primary-btn {
    white-space: initial;
  }
}

.summary-section {
  display: flex;
  margin-top: 30px;
  width: 100%;
  flex-direction: column;
  justify-content: end;
  padding: 0 30px;
}

@media (max-width: 991px) {
  .summary-section {
    max-width: 100%;
    padding: 0 20px;
  }
}

.summary-content {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 30px;
  justify-content: end;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .summary-content {
    max-width: 100%;
  }
}

.summary-text {
  align-self: stretch;
  display: flex;
  min-width: 240px;
  flex-direction: column;
  color: #333;
  font-weight: 400;
  justify-content: start;
  flex: 1;
  flex-basis: 30px;
  margin: auto 0;
}

.summary-title {
  flex: 1;
  width: 100%;
  gap: 10px;
  font-size: 20px;
  line-height: 1.2;
}

.summary-description {
  flex: 1;
  margin-top: 10px;
  width: 100%;
  gap: 10px;
  font-size: 14px;
  line-height: 1;
}

.secondary-btn {
  align-self: stretch;
  flex: 1;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  min-height: 52px;
  overflow: hidden;
  font-size: 16px;
  color: #003cb3;
  font-weight: 700;
  text-align: center;
  width: 180px;
  margin: auto 0;
  padding: 0 15px;
}

.footer {
  padding-top: 30px;
  align-items: start;
  border-top: 1px solid #ccc;
  display: flex;
  margin-top: 30px;
  width: 100%;
  flex-direction: column;
  font-size: 14px;
  color: #003cb3;
  font-weight: 700;
  line-height: 1;
  justify-content: start;
}

@media (max-width: 991px) {
  .footer {
    max-width: 100%;
  }
}

.icon-link {
  display: flex;
  height: 14px;
  align-items: center;
  gap: 5px;
  overflow: hidden;
  justify-content: start;
}

.icon-link-text {
  align-self: stretch;
  margin: auto 0;
}

.icon-link-image {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: stretch;
  margin: auto 0;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>

<section class="process-module">
  <header class="module-header">
    <h2 class="headline">Lorem ipsum dolor</h2>
  </header>
  
  <div class="process-steps">
    <article class="step">
      <header class="step-header">
        <div class="step-title">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f72178b658b2fac599d804636740dcc9905193843fcb7eab4517fcd692df626b?placeholderIfAbsent=true&apiKey=40801ef743f54a3aad8f1703a2957ce8" alt="" class="step-icon" />
          <h3 class="step-name">Lorem Ipsum Dolor</h3>
        </div>
      </header>
      <div class="step-content">
        <p class="step-description">Lorem ipsum dolor sit amet, elit sit consectetur adipiscing.</p>
        <div class="step-action">
          <button class="primary-btn">Primary</button>
        </div>
      </div>
    </article>
    
    <article class="step">
      <header class="step-header">
        <div class="step-title">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cdb9aeb5d9c218991fe4cdae1848030dd6f572323ef4f53e8161c781475a4c9?placeholderIfAbsent=true&apiKey=40801ef743f54a3aad8f1703a2957ce8" alt="" class="step-icon" />
          <h3 class="step-name">Lorem Ipsum Dolor</h3>
        </div>
      </header>
      <div class="step-content">
        <p class="step-description">Lorem ipsum dolor sit amet, elit sit consectetur adipiscing.</p>
        <div class="step-action">
          <button class="primary-btn">Primary</button>
        </div>
      </div>
    </article>
  </div>
  
  <div class="summary-section">
    <div class="summary-content">
      <div class="summary-text">
        <h3 class="summary-title">Lorem Ipsum Dolor</h3>
        <p class="summary-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <button class="secondary-btn">Secondary Button</button>
    </div>
  </div>
  
  <footer class="footer">
    <a href="#" class="icon-link">
      <span class="icon-link-text">Icon Link</span>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eae413091ef0ab45c769234c0495f5e03116612c37bbec552e49875165d4cf0?placeholderIfAbsent=true&apiKey=40801ef743f54a3aad8f1703a2957ce8" alt="" class="icon-link-image" />
    </a>
  </footer>
</section>
