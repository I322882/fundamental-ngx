import { ChangeDetectorRef, Component, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Input, Output, OnInit, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonType, RtlService } from '@fundamental-ngx/core';
import { MenuComponent } from './../menu/menu.component';
import { BaseComponent } from '../base';

/**
 * Split Menu Button implementation based on the
 * https://github.com/SAP/fundamental-ngx/wiki/Platform:-Split-Menu-Button-Component-V1.0-Technical-Design
 * documents.
 *
 *
 */
@Component({
    selector: 'fdp-split-menu-button',
    templateUrl: './split-menu-button.component.html',
    styleUrls: ['split-menu-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitMenuButtonComponent extends BaseComponent implements OnInit, OnDestroy {
    /** text for tooltip */
    @Input()
    title: string;

    /** text for tooltip */
    @Input()
    menuTitle: string;

    /** Label for the first Button */
    @Input()
    buttonLabel: string;

    /** reference to menu which will be controlled by split button */
    @Input()
    menu: MenuComponent;

    /** The Sap-icon to include in the menu-button */
    @Input()
    icon: string;

    /** The type of the button.
     * 'Emphasized', 'Ghost', 'standard', 'positive', 'negative', 'transparent'
     * Leave empty for default.'*/
    @Input()
    type: ButtonType;

    /** Event sent when split-menu-button primary button is clicked */
    @Output()
    primaryButtonClick: EventEmitter<any> = new EventEmitter();

    /** used as id for Menu Button
     * @hidden
     */
    public secondaryId: string;

    /** handles rtl service
     * @hidden */
    public dir: string;

    /** handles rtl service
     * @hidden */
    private _rtlChangeSubscription = Subscription.EMPTY;

    constructor(protected _cd: ChangeDetectorRef, @Optional() private _rtl: RtlService) {
        super(_cd);
    }

    ngOnInit(): void {
        this.secondaryId = 'secondary-' + this.id;
        // if no title provided.
        this.title = this.title || this.buttonLabel;
        this._rtlChangeSubscription = this._rtl.rtl.subscribe((isRtl: boolean) => {
            this.dir = isRtl ? 'rtl' : 'ltr';
            this._cd.detectChanges();
        });
    }

    ngOnDestroy(): void {
        this._rtlChangeSubscription.unsubscribe();
    }

    /**
     *  Handles split-menu-button button click
     */
    public primaryButtonClicked(event: any): void {
        event.stopPropagation();
        this.primaryButtonClick.emit();
    }
}
