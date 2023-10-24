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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-7d2aae79558f84547d804fc993922aeb00c2fd0c0d14379774b0afca76da7ec19afeb3605ed703aec67df01de68eb2d6b4e627696f65da2f820ae1f3dd15bc54"' : 'data-bs-target="#xs-components-links-module-AppModule-7d2aae79558f84547d804fc993922aeb00c2fd0c0d14379774b0afca76da7ec19afeb3605ed703aec67df01de68eb2d6b4e627696f65da2f820ae1f3dd15bc54"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7d2aae79558f84547d804fc993922aeb00c2fd0c0d14379774b0afca76da7ec19afeb3605ed703aec67df01de68eb2d6b4e627696f65da2f820ae1f3dd15bc54"' :
                                            'id="xs-components-links-module-AppModule-7d2aae79558f84547d804fc993922aeb00c2fd0c0d14379774b0afca76da7ec19afeb3605ed703aec67df01de68eb2d6b4e627696f65da2f820ae1f3dd15bc54"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorCurtainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorCurtainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorToastComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorToastComponent</a>
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
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AppModule-7d2aae79558f84547d804fc993922aeb00c2fd0c0d14379774b0afca76da7ec19afeb3605ed703aec67df01de68eb2d6b4e627696f65da2f820ae1f3dd15bc54"' : 'data-bs-target="#xs-directives-links-module-AppModule-7d2aae79558f84547d804fc993922aeb00c2fd0c0d14379774b0afca76da7ec19afeb3605ed703aec67df01de68eb2d6b4e627696f65da2f820ae1f3dd15bc54"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-7d2aae79558f84547d804fc993922aeb00c2fd0c0d14379774b0afca76da7ec19afeb3605ed703aec67df01de68eb2d6b4e627696f65da2f820ae1f3dd15bc54"' :
                                        'id="xs-directives-links-module-AppModule-7d2aae79558f84547d804fc993922aeb00c2fd0c0d14379774b0afca76da7ec19afeb3605ed703aec67df01de68eb2d6b4e627696f65da2f820ae1f3dd15bc54"' }>
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
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthConfigModule-ca3018ccc08343de80584dd587a9127582aefe2719cc3da5c83effdc9d47f07d6fb56c667ead8cced018b49738057c2db447ca686e1b4e12533a0415c77ae62b"' : 'data-bs-target="#xs-components-links-module-AuthConfigModule-ca3018ccc08343de80584dd587a9127582aefe2719cc3da5c83effdc9d47f07d6fb56c667ead8cced018b49738057c2db447ca686e1b4e12533a0415c77ae62b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthConfigModule-ca3018ccc08343de80584dd587a9127582aefe2719cc3da5c83effdc9d47f07d6fb56c667ead8cced018b49738057c2db447ca686e1b4e12533a0415c77ae62b"' :
                                            'id="xs-components-links-module-AuthConfigModule-ca3018ccc08343de80584dd587a9127582aefe2719cc3da5c83effdc9d47f07d6fb56c667ead8cced018b49738057c2db447ca686e1b4e12533a0415c77ae62b"' }>
                                            <li class="link">
                                                <a href="components/CallbackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallbackComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BeWaterSmartModule.html" data-type="entity-link" >BeWaterSmartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BeWaterSmartModule-96ab181dadc5b270c5007861e7f7cd8eb39097aec3801b4e51099f4fe7be823ddac0add0f2487088e50c3770c0daad7d49978ea594a8c9f41528bb7c835a59d1"' : 'data-bs-target="#xs-components-links-module-BeWaterSmartModule-96ab181dadc5b270c5007861e7f7cd8eb39097aec3801b4e51099f4fe7be823ddac0add0f2487088e50c3770c0daad7d49978ea594a8c9f41528bb7c835a59d1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BeWaterSmartModule-96ab181dadc5b270c5007861e7f7cd8eb39097aec3801b4e51099f4fe7be823ddac0add0f2487088e50c3770c0daad7d49978ea594a8c9f41528bb7c835a59d1"' :
                                            'id="xs-components-links-module-BeWaterSmartModule-96ab181dadc5b270c5007861e7f7cd8eb39097aec3801b4e51099f4fe7be823ddac0add0f2487088e50c3770c0daad7d49978ea594a8c9f41528bb7c835a59d1"' }>
                                            <li class="link">
                                                <a href="components/BeWaterSmartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BeWaterSmartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExampleModule.html" data-type="entity-link" >ExampleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExampleModule-4582de06c39f10925e52389154e8821354b21b8dce1df613c2542162c112f449bbfe3d612afcc058c4f87ed04f5571fe7fd7b9d0efbca43b850da29b3bcd1ceb"' : 'data-bs-target="#xs-components-links-module-ExampleModule-4582de06c39f10925e52389154e8821354b21b8dce1df613c2542162c112f449bbfe3d612afcc058c4f87ed04f5571fe7fd7b9d0efbca43b850da29b3bcd1ceb"' }>
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
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PumpModelModule-67919ea93a3b815662dc74437615d7e6c18d117bfe6e0b3ace1f1c2ef2983e00f8b7713e8056f8b735b8954e7de3812258d267ea3ebd00f52923336b8dffcb45"' : 'data-bs-target="#xs-components-links-module-PumpModelModule-67919ea93a3b815662dc74437615d7e6c18d117bfe6e0b3ace1f1c2ef2983e00f8b7713e8056f8b735b8954e7de3812258d267ea3ebd00f52923336b8dffcb45"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PumpModelModule-67919ea93a3b815662dc74437615d7e6c18d117bfe6e0b3ace1f1c2ef2983e00f8b7713e8056f8b735b8954e7de3812258d267ea3ebd00f52923336b8dffcb45"' :
                                            'id="xs-components-links-module-PumpModelModule-67919ea93a3b815662dc74437615d7e6c18d117bfe6e0b3ace1f1c2ef2983e00f8b7713e8056f8b735b8954e7de3812258d267ea3ebd00f52923336b8dffcb45"' }>
                                            <li class="link">
                                                <a href="components/PumpModelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PumpModelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WaterUsageForecastsModule.html" data-type="entity-link" >WaterUsageForecastsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-WaterUsageForecastsModule-d7fa6e34cf5734b5fff9446ff3d3356631fa2eb77d30bf0919c5a5a055bf5ae4550a0744619a67c5cdfcd2cd2c3abf55914687881228987f5b33eec128bd1096"' : 'data-bs-target="#xs-components-links-module-WaterUsageForecastsModule-d7fa6e34cf5734b5fff9446ff3d3356631fa2eb77d30bf0919c5a5a055bf5ae4550a0744619a67c5cdfcd2cd2c3abf55914687881228987f5b33eec128bd1096"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WaterUsageForecastsModule-d7fa6e34cf5734b5fff9446ff3d3356631fa2eb77d30bf0919c5a5a055bf5ae4550a0744619a67c5cdfcd2cd2c3abf55914687881228987f5b33eec128bd1096"' :
                                            'id="xs-components-links-module-WaterUsageForecastsModule-d7fa6e34cf5734b5fff9446ff3d3356631fa2eb77d30bf0919c5a5a055bf5ae4550a0744619a67c5cdfcd2cd2c3abf55914687881228987f5b33eec128bd1096"' }>
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
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-WisdomModule-1a1211273f0ca0e428ef8cd743953b2b067e398a225d2c412ddb8221e3dd1ebda63b26e06a47fe4f0cbf016f2e1c87de34490bd233393cd21cec6d0c349a9a30"' : 'data-bs-target="#xs-components-links-module-WisdomModule-1a1211273f0ca0e428ef8cd743953b2b067e398a225d2c412ddb8221e3dd1ebda63b26e06a47fe4f0cbf016f2e1c87de34490bd233393cd21cec6d0c349a9a30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WisdomModule-1a1211273f0ca0e428ef8cd743953b2b067e398a225d2c412ddb8221e3dd1ebda63b26e06a47fe4f0cbf016f2e1c87de34490bd233393cd21cec6d0c349a9a30"' :
                                            'id="xs-components-links-module-WisdomModule-1a1211273f0ca0e428ef8cd743953b2b067e398a225d2c412ddb8221e3dd1ebda63b26e06a47fe4f0cbf016f2e1c87de34490bd233393cd21cec6d0c349a9a30"' }>
                                            <li class="link">
                                                <a href="components/BreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BreadcrumbsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DragDropComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DragDropComponent</a>
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
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-WisdomModule-1a1211273f0ca0e428ef8cd743953b2b067e398a225d2c412ddb8221e3dd1ebda63b26e06a47fe4f0cbf016f2e1c87de34490bd233393cd21cec6d0c349a9a30"' : 'data-bs-target="#xs-directives-links-module-WisdomModule-1a1211273f0ca0e428ef8cd743953b2b067e398a225d2c412ddb8221e3dd1ebda63b26e06a47fe4f0cbf016f2e1c87de34490bd233393cd21cec6d0c349a9a30"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-WisdomModule-1a1211273f0ca0e428ef8cd743953b2b067e398a225d2c412ddb8221e3dd1ebda63b26e06a47fe4f0cbf016f2e1c87de34490bd233393cd21cec6d0c349a9a30"' :
                                        'id="xs-directives-links-module-WisdomModule-1a1211273f0ca0e428ef8cd743953b2b067e398a225d2c412ddb8221e3dd1ebda63b26e06a47fe4f0cbf016f2e1c87de34490bd233393cd21cec6d0c349a9a30"' }>
                                        <li class="link">
                                            <a href="directives/BulmaCalendarDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulmaCalendarDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/BulmaIsToggleableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulmaIsToggleableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DragDropDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DragDropDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ErrorHttpContextToken.html" data-type="entity-link" >ErrorHttpContextToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModuleProvider.html" data-type="entity-link" >ModuleProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/StaticLoader.html" data-type="entity-link" >StaticLoader</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthentikService.html" data-type="entity-link" >AuthentikService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BeWaterSmartService.html" data-type="entity-link" >BeWaterSmartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BreadcrumbsService.html" data-type="entity-link" >BreadcrumbsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsumersService.html" data-type="entity-link" >ConsumersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DragDropService.html" data-type="entity-link" >DragDropService</a>
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
                                    <a href="injectables/LoaderGuard.html" data-type="entity-link" >LoaderGuard</a>
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
                                    <a href="injectables/QueryParameterGuard.html" data-type="entity-link" >QueryParameterGuard</a>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Algorithm.html" data-type="entity-link" >Algorithm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllAlgorithms.html" data-type="entity-link" >AllAlgorithms</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllModels.html" data-type="entity-link" >AllModels</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllPhysicalMeters.html" data-type="entity-link" >AllPhysicalMeters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllVirtualMeters.html" data-type="entity-link" >AllVirtualMeters</a>
                            </li>
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
                                <a href="interfaces/ForeCast.html" data-type="entity-link" >ForeCast</a>
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
                                <a href="interfaces/MLModel.html" data-type="entity-link" >MLModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PhysicalMeter.html" data-type="entity-link" >PhysicalMeter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/schema.html" data-type="entity-link" >schema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShapeData.html" data-type="entity-link" >ShapeData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VirtualMeter.html" data-type="entity-link" >VirtualMeter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WisdomInterface.html" data-type="entity-link" >WisdomInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});