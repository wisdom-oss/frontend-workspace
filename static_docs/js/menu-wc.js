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
                                            'data-target="#components-links-module-AppModule-475ac70a8c41bbb24fc33352bd296c67f00e4a807439078955494c192db330c0da02ce4f7402d0b79bb80aea1c6c758bcb85d3218f2f8da001dda9fcefa6015a"' : 'data-target="#xs-components-links-module-AppModule-475ac70a8c41bbb24fc33352bd296c67f00e4a807439078955494c192db330c0da02ce4f7402d0b79bb80aea1c6c758bcb85d3218f2f8da001dda9fcefa6015a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-475ac70a8c41bbb24fc33352bd296c67f00e4a807439078955494c192db330c0da02ce4f7402d0b79bb80aea1c6c758bcb85d3218f2f8da001dda9fcefa6015a"' :
                                            'id="xs-components-links-module-AppModule-475ac70a8c41bbb24fc33352bd296c67f00e4a807439078955494c192db330c0da02ce4f7402d0b79bb80aea1c6c758bcb85d3218f2f8da001dda9fcefa6015a"' }>
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
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-475ac70a8c41bbb24fc33352bd296c67f00e4a807439078955494c192db330c0da02ce4f7402d0b79bb80aea1c6c758bcb85d3218f2f8da001dda9fcefa6015a"' : 'data-target="#xs-directives-links-module-AppModule-475ac70a8c41bbb24fc33352bd296c67f00e4a807439078955494c192db330c0da02ce4f7402d0b79bb80aea1c6c758bcb85d3218f2f8da001dda9fcefa6015a"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-475ac70a8c41bbb24fc33352bd296c67f00e4a807439078955494c192db330c0da02ce4f7402d0b79bb80aea1c6c758bcb85d3218f2f8da001dda9fcefa6015a"' :
                                        'id="xs-directives-links-module-AppModule-475ac70a8c41bbb24fc33352bd296c67f00e4a807439078955494c192db330c0da02ce4f7402d0b79bb80aea1c6c758bcb85d3218f2f8da001dda9fcefa6015a"' }>
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
                                <a href="modules/ChartModule.html" data-type="entity-link" >ChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChartModule-e2d6ec839e81bfc416a4f9e3a174504ed3e2daaa1a66da0983f3450fc54f99c3bc67e3e84f6de9a5882c2e26ad650f2e4d4babf1d162393d018746d29ba0f43e"' : 'data-target="#xs-components-links-module-ChartModule-e2d6ec839e81bfc416a4f9e3a174504ed3e2daaa1a66da0983f3450fc54f99c3bc67e3e84f6de9a5882c2e26ad650f2e4d4babf1d162393d018746d29ba0f43e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChartModule-e2d6ec839e81bfc416a4f9e3a174504ed3e2daaa1a66da0983f3450fc54f99c3bc67e3e84f6de9a5882c2e26ad650f2e4d4babf1d162393d018746d29ba0f43e"' :
                                            'id="xs-components-links-module-ChartModule-e2d6ec839e81bfc416a4f9e3a174504ed3e2daaa1a66da0983f3450fc54f99c3bc67e3e84f6de9a5882c2e26ad650f2e4d4babf1d162393d018746d29ba0f43e"' }>
                                            <li class="link">
                                                <a href="components/BarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineChartComponent</a>
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
                                <a href="modules/WaterUsageForecastsModule.html" data-type="entity-link" >WaterUsageForecastsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WaterUsageForecastsModule-f3f0bb11616530e50c00ef457a09173ae2158fd3e5a693d3b6d44d56d42c1106f93451ec2c560d4f02a6e90e9a9d0cfcd15341b44099329845f1bef5eb10e5bc"' : 'data-target="#xs-components-links-module-WaterUsageForecastsModule-f3f0bb11616530e50c00ef457a09173ae2158fd3e5a693d3b6d44d56d42c1106f93451ec2c560d4f02a6e90e9a9d0cfcd15341b44099329845f1bef5eb10e5bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WaterUsageForecastsModule-f3f0bb11616530e50c00ef457a09173ae2158fd3e5a693d3b6d44d56d42c1106f93451ec2c560d4f02a6e90e9a9d0cfcd15341b44099329845f1bef5eb10e5bc"' :
                                            'id="xs-components-links-module-WaterUsageForecastsModule-f3f0bb11616530e50c00ef457a09173ae2158fd3e5a693d3b6d44d56d42c1106f93451ec2c560d4f02a6e90e9a9d0cfcd15341b44099329845f1bef5eb10e5bc"' }>
                                            <li class="link">
                                                <a href="components/MapSelectViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapSelectViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultDataViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultDataViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WaterUsageForecastsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WaterUsageForecastsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WisdomModule.html" data-type="entity-link" >WisdomModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WisdomModule-045d7858bc925532b80b1bc52800c2a6c1e6a17770d91ac7c2b7e19d4f913b7a6358eed193040d6d19a714c11c62e4c45e82754f3bdaa1a4a2cf4c6ac43e83c2"' : 'data-target="#xs-components-links-module-WisdomModule-045d7858bc925532b80b1bc52800c2a6c1e6a17770d91ac7c2b7e19d4f913b7a6358eed193040d6d19a714c11c62e4c45e82754f3bdaa1a4a2cf4c6ac43e83c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WisdomModule-045d7858bc925532b80b1bc52800c2a6c1e6a17770d91ac7c2b7e19d4f913b7a6358eed193040d6d19a714c11c62e4c45e82754f3bdaa1a4a2cf4c6ac43e83c2"' :
                                            'id="xs-components-links-module-WisdomModule-045d7858bc925532b80b1bc52800c2a6c1e6a17770d91ac7c2b7e19d4f913b7a6358eed193040d6d19a714c11c62e4c45e82754f3bdaa1a4a2cf4c6ac43e83c2"' }>
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
                                        'data-target="#directives-links-module-WisdomModule-045d7858bc925532b80b1bc52800c2a6c1e6a17770d91ac7c2b7e19d4f913b7a6358eed193040d6d19a714c11c62e4c45e82754f3bdaa1a4a2cf4c6ac43e83c2"' : 'data-target="#xs-directives-links-module-WisdomModule-045d7858bc925532b80b1bc52800c2a6c1e6a17770d91ac7c2b7e19d4f913b7a6358eed193040d6d19a714c11c62e4c45e82754f3bdaa1a4a2cf4c6ac43e83c2"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-WisdomModule-045d7858bc925532b80b1bc52800c2a6c1e6a17770d91ac7c2b7e19d4f913b7a6358eed193040d6d19a714c11c62e4c45e82754f3bdaa1a4a2cf4c6ac43e83c2"' :
                                        'id="xs-directives-links-module-WisdomModule-045d7858bc925532b80b1bc52800c2a6c1e6a17770d91ac7c2b7e19d4f913b7a6358eed193040d6d19a714c11c62e4c45e82754f3bdaa1a4a2cf4c6ac43e83c2"' }>
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
                                    <a href="injectables/ExampleService.html" data-type="entity-link" >ExampleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapService.html" data-type="entity-link" >MapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsStorageService.html" data-type="entity-link" >SettingsStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WaterUsageForecastsService.html" data-type="entity-link" >WaterUsageForecastsService</a>
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