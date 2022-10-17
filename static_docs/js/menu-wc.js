'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">workspace documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-56a1d356e5c9d1c9402fb0760d22420a57d3ea5604988146cbc39add8f0ba103b931361e2cb3728fec03868f29da50f3b5b95dd1a6ddbab225abd693182e5c1d"' : 'data-target="#xs-components-links-module-AppModule-56a1d356e5c9d1c9402fb0760d22420a57d3ea5604988146cbc39add8f0ba103b931361e2cb3728fec03868f29da50f3b5b95dd1a6ddbab225abd693182e5c1d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-56a1d356e5c9d1c9402fb0760d22420a57d3ea5604988146cbc39add8f0ba103b931361e2cb3728fec03868f29da50f3b5b95dd1a6ddbab225abd693182e5c1d"' :
                                            'id="xs-components-links-module-AppModule-56a1d356e5c9d1c9402fb0760d22420a57d3ea5604988146cbc39add8f0ba103b931361e2cb3728fec03868f29da50f3b5b95dd1a6ddbab225abd693182e5c1d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-56a1d356e5c9d1c9402fb0760d22420a57d3ea5604988146cbc39add8f0ba103b931361e2cb3728fec03868f29da50f3b5b95dd1a6ddbab225abd693182e5c1d"' : 'data-target="#xs-directives-links-module-AppModule-56a1d356e5c9d1c9402fb0760d22420a57d3ea5604988146cbc39add8f0ba103b931361e2cb3728fec03868f29da50f3b5b95dd1a6ddbab225abd693182e5c1d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-56a1d356e5c9d1c9402fb0760d22420a57d3ea5604988146cbc39add8f0ba103b931361e2cb3728fec03868f29da50f3b5b95dd1a6ddbab225abd693182e5c1d"' :
                                        'id="xs-directives-links-module-AppModule-56a1d356e5c9d1c9402fb0760d22420a57d3ea5604988146cbc39add8f0ba103b931361e2cb3728fec03868f29da50f3b5b95dd1a6ddbab225abd693182e5c1d"' }>
                                        <li class="link">
                                            <a href="directives/LangSelectorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LangSelectorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExampleModule.html" data-type="entity-link" >ExampleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExampleModule-f2fd0037dc38950610f521118714b3bef4158cd9176a36eabf0b08b88955c8f1941b6e2843d02679602a9fa2f6e2562122fb10591efcf06d864ae0d54fd8157a"' : 'data-target="#xs-components-links-module-ExampleModule-f2fd0037dc38950610f521118714b3bef4158cd9176a36eabf0b08b88955c8f1941b6e2843d02679602a9fa2f6e2562122fb10591efcf06d864ae0d54fd8157a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExampleModule-f2fd0037dc38950610f521118714b3bef4158cd9176a36eabf0b08b88955c8f1941b6e2843d02679602a9fa2f6e2562122fb10591efcf06d864ae0d54fd8157a"' :
                                            'id="xs-components-links-module-ExampleModule-f2fd0037dc38950610f521118714b3bef4158cd9176a36eabf0b08b88955c8f1941b6e2843d02679602a9fa2f6e2562122fb10591efcf06d864ae0d54fd8157a"' }>
                                            <li class="link">
                                                <a href="components/ExampleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExampleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PumpModelModule.html" data-type="entity-link" >PumpModelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PumpModelModule-75e7da12bab022a203ea14e79e2434c89d90378ec8b181b4e09330ddb3cafe07d30cc2918a638ba10739fefd151d38a79bfaa97e3c82e0e3aa8f6b6efad2d69c"' : 'data-target="#xs-components-links-module-PumpModelModule-75e7da12bab022a203ea14e79e2434c89d90378ec8b181b4e09330ddb3cafe07d30cc2918a638ba10739fefd151d38a79bfaa97e3c82e0e3aa8f6b6efad2d69c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PumpModelModule-75e7da12bab022a203ea14e79e2434c89d90378ec8b181b4e09330ddb3cafe07d30cc2918a638ba10739fefd151d38a79bfaa97e3c82e0e3aa8f6b6efad2d69c"' :
                                            'id="xs-components-links-module-PumpModelModule-75e7da12bab022a203ea14e79e2434c89d90378ec8b181b4e09330ddb3cafe07d30cc2918a638ba10739fefd151d38a79bfaa97e3c82e0e3aa8f6b6efad2d69c"' }>
                                            <li class="link">
                                                <a href="components/PumpModelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PumpModelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WaterUsageForecastsModule.html" data-type="entity-link" >WaterUsageForecastsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WaterUsageForecastsModule-077fcd67c5543d44b3b1f009c0bfcb7ac9034fbed367df5e7067d324ee7b99390e9dbbb31b32a40efc17bde633682d09ec9f2bfad58c57412aad1f9cc73878c4"' : 'data-target="#xs-components-links-module-WaterUsageForecastsModule-077fcd67c5543d44b3b1f009c0bfcb7ac9034fbed367df5e7067d324ee7b99390e9dbbb31b32a40efc17bde633682d09ec9f2bfad58c57412aad1f9cc73878c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WaterUsageForecastsModule-077fcd67c5543d44b3b1f009c0bfcb7ac9034fbed367df5e7067d324ee7b99390e9dbbb31b32a40efc17bde633682d09ec9f2bfad58c57412aad1f9cc73878c4"' :
                                            'id="xs-components-links-module-WaterUsageForecastsModule-077fcd67c5543d44b3b1f009c0bfcb7ac9034fbed367df5e7067d324ee7b99390e9dbbb31b32a40efc17bde633682d09ec9f2bfad58c57412aad1f9cc73878c4"' }>
                                            <li class="link">
                                                <a href="components/ConsumerDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsumerDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapSelectViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapSelectViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultDataViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultDataViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WaterRightDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WaterRightDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WisdomModule.html" data-type="entity-link" >WisdomModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WisdomModule-b721a8306650ecce80e2110815d69a07c0d178490dee9b36f01cd315d33a66313c044aed190afaed3479e51421581f3952de7ce5d27f109be52337aff3edc9ce"' : 'data-target="#xs-components-links-module-WisdomModule-b721a8306650ecce80e2110815d69a07c0d178490dee9b36f01cd315d33a66313c044aed190afaed3479e51421581f3952de7ce5d27f109be52337aff3edc9ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WisdomModule-b721a8306650ecce80e2110815d69a07c0d178490dee9b36f01cd315d33a66313c044aed190afaed3479e51421581f3952de7ce5d27f109be52337aff3edc9ce"' :
                                            'id="xs-components-links-module-WisdomModule-b721a8306650ecce80e2110815d69a07c0d178490dee9b36f01cd315d33a66313c044aed190afaed3479e51421581f3952de7ce5d27f109be52337aff3edc9ce"' }>
                                            <li class="link">
                                                <a href="components/BimComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BimComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BreadcrumbsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IonIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IonIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-WisdomModule-b721a8306650ecce80e2110815d69a07c0d178490dee9b36f01cd315d33a66313c044aed190afaed3479e51421581f3952de7ce5d27f109be52337aff3edc9ce"' : 'data-target="#xs-directives-links-module-WisdomModule-b721a8306650ecce80e2110815d69a07c0d178490dee9b36f01cd315d33a66313c044aed190afaed3479e51421581f3952de7ce5d27f109be52337aff3edc9ce"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-WisdomModule-b721a8306650ecce80e2110815d69a07c0d178490dee9b36f01cd315d33a66313c044aed190afaed3479e51421581f3952de7ce5d27f109be52337aff3edc9ce"' :
                                        'id="xs-directives-links-module-WisdomModule-b721a8306650ecce80e2110815d69a07c0d178490dee9b36f01cd315d33a66313c044aed190afaed3479e51421581f3952de7ce5d27f109be52337aff3edc9ce"' }>
                                        <li class="link">
                                            <a href="directives/BulmaIsToggleableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulmaIsToggleableDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ModuleProvider.html" data-type="entity-link" >ModuleProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/StaticLoader.html" data-type="entity-link" >StaticLoader</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthStorageService.html" data-type="entity-link" >AuthStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BimService.html" data-type="entity-link" >BimService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BreadcrumbsService.html" data-type="entity-link" >BreadcrumbsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsumersService.html" data-type="entity-link" >ConsumersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorService.html" data-type="entity-link" >ErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExampleService.html" data-type="entity-link" >ExampleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapService.html" data-type="entity-link" >MapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PumpModelService.html" data-type="entity-link" >PumpModelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsStorageService.html" data-type="entity-link" >SettingsStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WaterRightsService.html" data-type="entity-link" >WaterRightsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WaterUsageForecastsService.html" data-type="entity-link" >WaterUsageForecastsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WaterUsageHistoryService.html" data-type="entity-link" >WaterUsageHistoryService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/BaseUrlInterceptor.html" data-type="entity-link" >BaseUrlInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/CacheInterceptor.html" data-type="entity-link" >CacheInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link" >LoaderInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/SanitizeUrlInterceptor.html" data-type="entity-link" >SanitizeUrlInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoaderGuard.html" data-type="entity-link" >LoaderGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/QueryParameterGuard.html" data-type="entity-link" >QueryParameterGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Breadcrumb.html" data-type="entity-link" >Breadcrumb</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Error.html" data-type="entity-link" >Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ForecastEntry.html" data-type="entity-link" >ForecastEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ForecastResponse.html" data-type="entity-link" >ForecastResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ForecastUsage.html" data-type="entity-link" >ForecastUsage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LayerData.html" data-type="entity-link" >LayerData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapDB.html" data-type="entity-link" >MapDB</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marker.html" data-type="entity-link" >Marker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShapeData.html" data-type="entity-link" >ShapeData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WisdomInterface.html" data-type="entity-link" >WisdomInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});