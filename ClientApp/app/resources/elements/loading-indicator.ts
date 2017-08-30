import { bindable, noView } from 'aurelia-framework';
import * as nprogress from 'nprogress';

@noView(['nprogress/nprogress.css'])
export class LoadingIndicator {
    @bindable public loading = false;

    private loadingChanged(newValue: boolean): void {
        console.log(newValue);
        
        if (newValue) {
            nprogress.start();
        } else {
            nprogress.done();
        }
    }
}
