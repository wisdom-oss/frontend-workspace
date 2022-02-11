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
                                            'data-target="#components-links-module-AppModule-4b3279246a9e580814ae0205ea7a2b9ed6efa0256afeca4113f11b6646172298ba00b4e8c04e3e7f7880001e0730e3d2c3a59fa976a285b82fc2210e7d3441be"' : 'data-target="#xs-components-links-module-AppModule-4b3279246a9e580814ae0205ea7a2b9ed6efa0256afeca4113f11b6646172298ba00b4e8c04e3e7f7880001e0730e3d2c3a59fa976a285b82fc2210e7d3441be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4b3279246a9e580814ae0205ea7a2b9ed6efa0256afeca4113f11b6646172298ba00b4e8c04e3e7f7880001e0730e3d2c3a59fa976a285b82fc2210e7d3441be"' :
                                            'id="xs-components-links-module-AppModule-4b3279246a9e580814ae0205ea7a2b9ed6efa0256afeca4113f11b6646172298ba00b4e8c04e3e7f7880001e0730e3d2c3a59fa976a285b82fc2210e7d3441be"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-4b3279246a9e580814ae0205ea7a2b9ed6efa0256afeca4113f11b6646172298ba00b4e8c04e3e7f7880001e0730e3d2c3a59fa976a285b82fc2210e7d3441be"' : 'data-target="#xs-directives-links-module-AppModule-4b3279246a9e580814ae0205ea7a2b9ed6efa0256afeca4113f11b6646172298ba00b4e8c04e3e7f7880001e0730e3d2c3a59fa976a285b82fc2210e7d3441be"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-4b3279246a9e580814ae0205ea7a2b9ed6efa0256afeca4113f11b6646172298ba00b4e8c04e3e7f7880001e0730e3d2c3a59fa976a285b82fc2210e7d3441be"' :
                                        'id="xs-directives-links-module-AppModule-4b3279246a9e580814ae0205ea7a2b9ed6efa0256afeca4113f11b6646172298ba00b4e8c04e3e7f7880001e0730e3d2c3a59fa976a285b82fc2210e7d3441be"' }>
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
                                            'data-target="#components-links-module-ExampleModule-b8e8169318b75f6a873bb42802d14219c3214474fc010d9a14a63b213ed8b960a262418ff97aa95fdf619deabb12e95572b4e8db1f870d9b6e7e4369e79f10b7"' : 'data-target="#xs-components-links-module-ExampleModule-b8e8169318b75f6a873bb42802d14219c3214474fc010d9a14a63b213ed8b960a262418ff97aa95fdf619deabb12e95572b4e8db1f870d9b6e7e4369e79f10b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExampleModule-b8e8169318b75f6a873bb42802d14219c3214474fc010d9a14a63b213ed8b960a262418ff97aa95fdf619deabb12e95572b4e8db1f870d9b6e7e4369e79f10b7"' :
                                            'id="xs-components-links-module-ExampleModule-b8e8169318b75f6a873bb42802d14219c3214474fc010d9a14a63b213ed8b960a262418ff97aa95fdf619deabb12e95572b4e8db1f870d9b6e7e4369e79f10b7"' }>
                                            <li class="link">
                                                <a href="components/ExampleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExampleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WisdomModule.html" data-type="entity-link" >WisdomModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WisdomModule-e3a4c2786bc083e3d431f65879100a1fa0d083e8ec08fadf95066c20a83b3884b14e66610c2b627283d4bc0b2a956ce4a2ca8a9597c7e78a9584c22f65ccd1fa"' : 'data-target="#xs-components-links-module-WisdomModule-e3a4c2786bc083e3d431f65879100a1fa0d083e8ec08fadf95066c20a83b3884b14e66610c2b627283d4bc0b2a956ce4a2ca8a9597c7e78a9584c22f65ccd1fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WisdomModule-e3a4c2786bc083e3d431f65879100a1fa0d083e8ec08fadf95066c20a83b3884b14e66610c2b627283d4bc0b2a956ce4a2ca8a9597c7e78a9584c22f65ccd1fa"' :
                                            'id="xs-components-links-module-WisdomModule-e3a4c2786bc083e3d431f65879100a1fa0d083e8ec08fadf95066c20a83b3884b14e66610c2b627283d4bc0b2a956ce4a2ca8a9597c7e78a9584c22f65ccd1fa"' }>
                                            <li class="link">
                                                <a href="components/IonIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IonIconComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-WisdomModule-e3a4c2786bc083e3d431f65879100a1fa0d083e8ec08fadf95066c20a83b3884b14e66610c2b627283d4bc0b2a956ce4a2ca8a9597c7e78a9584c22f65ccd1fa"' : 'data-target="#xs-directives-links-module-WisdomModule-e3a4c2786bc083e3d431f65879100a1fa0d083e8ec08fadf95066c20a83b3884b14e66610c2b627283d4bc0b2a956ce4a2ca8a9597c7e78a9584c22f65ccd1fa"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-WisdomModule-e3a4c2786bc083e3d431f65879100a1fa0d083e8ec08fadf95066c20a83b3884b14e66610c2b627283d4bc0b2a956ce4a2ca8a9597c7e78a9584c22f65ccd1fa"' :
                                        'id="xs-directives-links-module-WisdomModule-e3a4c2786bc083e3d431f65879100a1fa0d083e8ec08fadf95066c20a83b3884b14e66610c2b627283d4bc0b2a956ce4a2ca8a9597c7e78a9584c22f65ccd1fa"' }>
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
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
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