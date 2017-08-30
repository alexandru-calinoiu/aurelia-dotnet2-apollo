import { bindable, noView } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as nprogress from 'nprogress';

@noView([PLATFORM.moduleName('nprogress/nprogress.css')])
export class LoadingIndicator {
    @bindable public loading = false;

    private loadingChanged(newValue: boolean): void {
        if (newValue) {
            nprogress.start();
        } else {
            nprogress.done();
        }
    }
}
