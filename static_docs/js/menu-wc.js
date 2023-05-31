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
                                            'data-target="#components-links-module-AppModule-717c4028987850c21655f5cf43e6807c8019084ac2c29ce7b1da7ee84aa19f85a4c6e8cdf3812d2e8e99fd9b0daf56c4c7ca33867a3116be664ed001d864b9a9"' : 'data-target="#xs-components-links-module-AppModule-717c4028987850c21655f5cf43e6807c8019084ac2c29ce7b1da7ee84aa19f85a4c6e8cdf3812d2e8e99fd9b0daf56c4c7ca33867a3116be664ed001d864b9a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-717c4028987850c21655f5cf43e6807c8019084ac2c29ce7b1da7ee84aa19f85a4c6e8cdf3812d2e8e99fd9b0daf56c4c7ca33867a3116be664ed001d864b9a9"' :
                                            'id="xs-components-links-module-AppModule-717c4028987850c21655f5cf43e6807c8019084ac2c29ce7b1da7ee84aa19f85a4c6e8cdf3812d2e8e99fd9b0daf56c4c7ca33867a3116be664ed001d864b9a9"' }>
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
                                                <a href="components/SideBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserPopoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPopoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-717c4028987850c21655f5cf43e6807c8019084ac2c29ce7b1da7ee84aa19f85a4c6e8cdf3812d2e8e99fd9b0daf56c4c7ca33867a3116be664ed001d864b9a9"' : 'data-target="#xs-directives-links-module-AppModule-717c4028987850c21655f5cf43e6807c8019084ac2c29ce7b1da7ee84aa19f85a4c6e8cdf3812d2e8e99fd9b0daf56c4c7ca33867a3116be664ed001d864b9a9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-717c4028987850c21655f5cf43e6807c8019084ac2c29ce7b1da7ee84aa19f85a4c6e8cdf3812d2e8e99fd9b0daf56c4c7ca33867a3116be664ed001d864b9a9"' :
                                        'id="xs-directives-links-module-AppModule-717c4028987850c21655f5cf43e6807c8019084ac2c29ce7b1da7ee84aa19f85a4c6e8cdf3812d2e8e99fd9b0daf56c4c7ca33867a3116be664ed001d864b9a9"' }>
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
                                <a href="modules/AuthConfigModule.html" data-type="entity-link" >AuthConfigModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthConfigModule-1805dcc4a3935dd026fda2cbca66cda7c7f1ddda7db8d5157086ba881686972458ee8fc274049fd10cd14452b692429997d1fecfb6321cb35d279922fa8e89ea"' : 'data-target="#xs-components-links-module-AuthConfigModule-1805dcc4a3935dd026fda2cbca66cda7c7f1ddda7db8d5157086ba881686972458ee8fc274049fd10cd14452b692429997d1fecfb6321cb35d279922fa8e89ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthConfigModule-1805dcc4a3935dd026fda2cbca66cda7c7f1ddda7db8d5157086ba881686972458ee8fc274049fd10cd14452b692429997d1fecfb6321cb35d279922fa8e89ea"' :
                                            'id="xs-components-links-module-AuthConfigModule-1805dcc4a3935dd026fda2cbca66cda7c7f1ddda7db8d5157086ba881686972458ee8fc274049fd10cd14452b692429997d1fecfb6321cb35d279922fa8e89ea"' }>
                                            <li class="link">
                                                <a href="components/CallbackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallbackComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExampleModule.html" data-type="entity-link" >ExampleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExampleModule-4582de06c39f10925e52389154e8821354b21b8dce1df613c2542162c112f449bbfe3d612afcc058c4f87ed04f5571fe7fd7b9d0efbca43b850da29b3bcd1ceb"' : 'data-target="#xs-components-links-module-ExampleModule-4582de06c39f10925e52389154e8821354b21b8dce1df613c2542162c112f449bbfe3d612afcc058c4f87ed04f5571fe7fd7b9d0efbca43b850da29b3bcd1ceb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExampleModule-4582de06c39f10925e52389154e8821354b21b8dce1df613c2542162c112f449bbfe3d612afcc058c4f87ed04f5571fe7fd7b9d0efbca43b850da29b3bcd1ceb"' :
                                            'id="xs-components-links-module-ExampleModule-4582de06c39f10925e52389154e8821354b21b8dce1df613c2542162c112f449bbfe3d612afcc058c4f87ed04f5571fe7fd7b9d0efbca43b850da29b3bcd1ceb"' }>
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
                                            'data-target="#components-links-module-WaterUsageForecastsModule-a2d0a53b7b57fef41a3b082f4cde4160d4b1a28e657e256742809e482b9fcf18ec2e64cd8ac941423601fc9f639ffef77fa00b4f6092c82c6be63f9c48851dfc"' : 'data-target="#xs-components-links-module-WaterUsageForecastsModule-a2d0a53b7b57fef41a3b082f4cde4160d4b1a28e657e256742809e482b9fcf18ec2e64cd8ac941423601fc9f639ffef77fa00b4f6092c82c6be63f9c48851dfc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WaterUsageForecastsModule-a2d0a53b7b57fef41a3b082f4cde4160d4b1a28e657e256742809e482b9fcf18ec2e64cd8ac941423601fc9f639ffef77fa00b4f6092c82c6be63f9c48851dfc"' :
                                            'id="xs-components-links-module-WaterUsageForecastsModule-a2d0a53b7b57fef41a3b082f4cde4160d4b1a28e657e256742809e482b9fcf18ec2e64cd8ac941423601fc9f639ffef77fa00b4f6092c82c6be63f9c48851dfc"' }>
                                            <li class="link">
                                                <a href="components/ConsumerDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsumerDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapSelectViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapSelectViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProphetForecastResultDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProphetForecastResultDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultDataViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultDataViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WaterRightDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WaterRightDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WaterUsageForecastsResultDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WaterUsageForecastsResultDataComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WisdomModule.html" data-type="entity-link" >WisdomModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WisdomModule-393e7c4ff0cb769869c17d9d95f560fa8ff23dc752d8066e27bcb3b1d4b461649010d554d8db2be4402143f883e5ab58698539bdfe197d779117d826f843d195"' : 'data-target="#xs-components-links-module-WisdomModule-393e7c4ff0cb769869c17d9d95f560fa8ff23dc752d8066e27bcb3b1d4b461649010d554d8db2be4402143f883e5ab58698539bdfe197d779117d826f843d195"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WisdomModule-393e7c4ff0cb769869c17d9d95f560fa8ff23dc752d8066e27bcb3b1d4b461649010d554d8db2be4402143f883e5ab58698539bdfe197d779117d826f843d195"' :
                                            'id="xs-components-links-module-WisdomModule-393e7c4ff0cb769869c17d9d95f560fa8ff23dc752d8066e27bcb3b1d4b461649010d554d8db2be4402143f883e5ab58698539bdfe197d779117d826f843d195"' }>
                                            <li class="link">
                                                <a href="components/BreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BreadcrumbsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IfcComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IfcComponent</a>
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
                                        'data-target="#directives-links-module-WisdomModule-393e7c4ff0cb769869c17d9d95f560fa8ff23dc752d8066e27bcb3b1d4b461649010d554d8db2be4402143f883e5ab58698539bdfe197d779117d826f843d195"' : 'data-target="#xs-directives-links-module-WisdomModule-393e7c4ff0cb769869c17d9d95f560fa8ff23dc752d8066e27bcb3b1d4b461649010d554d8db2be4402143f883e5ab58698539bdfe197d779117d826f843d195"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-WisdomModule-393e7c4ff0cb769869c17d9d95f560fa8ff23dc752d8066e27bcb3b1d4b461649010d554d8db2be4402143f883e5ab58698539bdfe197d779117d826f843d195"' :
                                        'id="xs-directives-links-module-WisdomModule-393e7c4ff0cb769869c17d9d95f560fa8ff23dc752d8066e27bcb3b1d4b461649010d554d8db2be4402143f883e5ab58698539bdfe197d779117d826f843d195"' }>
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
                                    <a href="injectables/AuthentikService.html" data-type="entity-link" >AuthentikService</a>
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
                                    <a href="injectables/IfcService.html" data-type="entity-link" >IfcService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderInjector.html" data-type="entity-link" >LoaderInjector</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapService.html" data-type="entity-link" >MapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProphetForecastService.html" data-type="entity-link" >ProphetForecastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PumpModelService.html" data-type="entity-link" >PumpModelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsStorageService.html" data-type="entity-link" >SettingsStorageService</a>
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
                                <a href="interfaces/AuthConfig.html" data-type="entity-link" >AuthConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Breadcrumb.html" data-type="entity-link" >Breadcrumb</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Datapoint.html" data-type="entity-link" >Datapoint</a>
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
                                <a href="interfaces/ForecastResponse-1.html" data-type="entity-link" >ForecastResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ForecastUsage.html" data-type="entity-link" >ForecastUsage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IfcDB.html" data-type="entity-link" >IfcDB</a>
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
                                <a href="interfaces/schema.html" data-type="entity-link" >schema</a>
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