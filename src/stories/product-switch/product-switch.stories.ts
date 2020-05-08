import { moduleMetadata } from '@storybook/angular';
import { withKnobs, boolean, select, text, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { ProductSwitchComponent, ProductSwitchModule } from 'libs/core/src/lib/product-switch/public_api';

export default {
    title: 'Fd product-switch',
    component: ProductSwitchComponent,
    moduleMetadata: moduleMetadata,
    decorators: [
        withKnobs,
        withA11y,
        moduleMetadata({
            imports: [ProductSwitchModule],
            declarations: []
        })
    ]
};



export const ProductSwitch = () => ({
    template:
        `<fd-product-switch 
                [closeOnEscapeKey]="closeOnEscapeKey"
                [closeOnOutsideClick]="closeOnOutsideClick"
                [disabled]="disabled"
                [fillControlMode]="fillControlMode"
                [focusTrapped]="focusTrapped"
                [isDropdown]="isDropdown"
                [isOpen]="isOpen"
                [noArrow]="noArrow"
                [placement]="placement"
                [triggers]="triggersVar">
            <fd-product-switch-body
                [forceListMode]="forceListModeVar"
                [products]="objectVar"
                [dragAndDropEnabled]="dragAndDropEnabled">
            </fd-product-switch-body>
        </fd-product-switch>
    `,
    props: {
        forceListModeVar: boolean('Mobile Mode', false),
        closeOnEscapeKey: boolean('Close On Esc', false),
        closeOnOutsideClick: boolean('Close on Outside Click', false),
        disabled: boolean('disabled', false),
        fillControlMode: select('Full Controll Mode',{ equal: 'equal', atLeast: 'at-least', none: '',},'equal'),
        focusTrapped: boolean('Focus Trapped', false),
        id: text('id', 'abd123'),
        isDropdown: boolean('Is Dropdown', true),
        isOpen: boolean('Is Open', false),
        noArrow: boolean('Hide Arrow', false),
        placement: text('Placement', 'right-start'),
        dragAndDropEnabled: boolean('Enable Drag and Drop', false),
        triggersVar: object('Triggers', ['click']),
        objectVar: object('Objects',
            [
                {
                    title: 'Home',
                    subtitle: 'Central Home',
                    icon: 'home',
                    stickToPosition: true,
                    disabledDragAndDrop: true
                },
                {
                    title: 'Analytics Cloud',
                    subtitle: 'Analytics Cloud',
                    icon: 'business-objects-experience'
                },
                {
                    title: 'Catalog',
                    subtitle: 'Ariba',
                    icon: 'contacts'
                },
                {
                    title: 'Guided Buying',
                    icon: 'credit-card',
                },
                {
                    title: 'Strategic Procurement',
                    icon: 'cart-3',
                },
                {
                    title: 'Vendor Managemen',
                    subtitle: 'Fieldglass',
                    icon: 'shipping-status',
                    selected: true
                },
                {
                    title: 'Human Capital Management',
                    icon: 'customer'
                },
                {
                    title: 'Sales Cloud',
                    subtitle: 'Sales Cloud',
                    icon: 'sales-notification'
                },
                {
                    title: 'Commerce Cloud',
                    subtitle: 'Commerce Cloud',
                    icon: 'retail-store'
                },
                {
                    title: 'Marketing Cloud',
                    subtitle: 'Marketing Cloud',
                    icon: 'marketing-campaign'
                },
                {
                    title: 'Service Cloud',
                    icon: 'family-care'
                },
                {
                    title: 'S/4HANA',
                    icon: 'batch-payments'
                },
            ]
        )
    },
});