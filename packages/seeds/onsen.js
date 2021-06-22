return [
  {
    title: 'Carousel',
    href: 'https://onsen.io/v2/api/react/Carousel.html',
    description:
      'Carousel component. A carousel can be used to display several items in the same space. The component supports displaying content both horizontally and vertically. The user can scroll through the items by dragging and it can also be controller programmatically.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'If true, the carousel will be disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'itemHeight',
        propTypeProp: 'union',
        description:
          'ons-carousel-item’s height. Only works when the direction is set to “vertical”. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'fullscreen',
        propTypeProp: 'boolean',
        description:
          'If true, the carousel will cover the whole screen. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'autoRefresh',
        propTypeProp: 'boolean',
        description:
          'When this attribute is set the carousel will automatically refresh when the number of child nodes change. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'autoScroll',
        propTypeProp: 'boolean',
        description:
          'If true, the carousel will be automatically scrolled to the closest item border when released. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onOverscroll',
        propTypeProp: 'function',
        description:
          'Called when the carousel has been overscrolled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'swipeable',
        propTypeProp: 'boolean',
        description:
          'If true, the carousel can be scrolled by drag or swipe. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'centered',
        propTypeProp: 'boolean',
        description:
          'If true, the carousel then the selected item will be in the center of the carousel instead of the beginning. Useful only when the items are smaller than the carousel. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'itemWidth',
        propTypeProp: 'union',
        description:
          'ons-carousel-item’s width. Only works when the direction is set to “horizontal”. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'autoScrollRatio',
        propTypeProp: 'number',
        description:
          'A number between 0.0 and 1.0 that specifies how much the user must drag the carousel in order for it to auto scroll to the next item. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'index',
        propTypeProp: 'number',
        description:
          'Specify the index of the ons-carousel-item to show. Default is 0. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onRefresh',
        propTypeProp: 'function',
        description: 'Called when the carousel has been refreshed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onSwipe',
        propTypeProp: 'function',
        description:
          'Hook called whenever the user slides the carousel. It gets a decimal index and an animationOptions object as arguments. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostChange',
        propTypeProp: 'function',
        description:
          'Called just after the current carousel item has changed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'overscrollable',
        propTypeProp: 'boolean',
        description:
          'If true, the carousel will be scrollable over the edge. It will bounce back when released. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'direction',
        propTypeProp: 'enum',
        description:
          'The direction of the carousel. Can be either “horizontal” or “vertical”. Default is “horizontal”. Optional.',
      },
    ],
  },
  {
    title: 'PullHook',
    href: 'https://onsen.io/v2/api/react/PullHook.html',
    description:
      'Component that adds Pull to refresh functionality to an <ons-page> element. It can be used to perform a task when the user pulls down at the top of the page. A common usage is to refresh the data displayed in a page.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'fixedContent',
        propTypeProp: 'boolean',
        description:
          'If set to true, the content of the page will not move when pulling. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'height',
        propTypeProp: 'number',
        description:
          'The height of the pull hook in pixels. The default value is 64. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description:
          'When set to true, the pull hook will be disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'thresholdHeight',
        propTypeProp: 'number',
        description:
          'The threshold height of the pull hook in pixels. The default value is 96. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPull',
        propTypeProp: 'function',
        description:
          'Hook called whenever the user pulls the element. It gets the pulled distance ratio (scroll / height) and an animationOptions object as arguments. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onChange',
        propTypeProp: 'function',
        description:
          'Called when the pull hook inner state is changed. The state can be either “initial”, “preaction” or “action” Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onLoad',
        propTypeProp: 'function',
        description:
          'Called when the pull hook is in the action state Optional.',
      },
    ],
  },
  {
    title: 'SearchInput',
    href: 'https://onsen.io/v2/api/react/SearchInput.html',
    description:
      'A search input component. The component will automatically render as a Material Design search input on Android devices. Most attributes that can be used for a normal <input> element can also be used on the <SearchInput> component.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'inputId',
        propTypeProp: 'string',
        description:
          'Specify the “id” attribute of the inner <input> element. This is useful when using  elements Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'value',
        propTypeProp: 'union',
        description: 'Content of the input. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the input is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the input. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onChange',
        propTypeProp: 'function',
        description: 'Called when the text of the input changes. Optional.',
      },
    ],
  },
  {
    title: 'Navigator',
    href: 'https://onsen.io/v2/api/react/Navigator.html',
    description:
      'This component is responsible for page transitioning and managing the pages of your OnsenUI application. In order to manage to display the pages, the  navigator needs to define the renderPage method, that takes an route and a navigator and  converts it to an page.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'routes',
        propTypeProp: 'Array',
        description: 'The routes that the navigator should be reset to.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostPop',
        propTypeProp: 'function',
        description:
          'Called just after a page is popped. It gets an event object with route information. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderPage',
        propTypeProp: 'function',
        description:
          'This function takes the current route object as a parameter and returns a React component. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'swipeable',
        propTypeProp: 'union',
        description: 'Enables swipe-to-pop functionality for iOS. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'initialRouteStack',
        propTypeProp: 'array',
        description:
          'This array contains the initial routes from the Navigator, which will be used to render the initial pages in the renderPage method. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'swipePop',
        propTypeProp: 'function',
        description:
          'Optional function called on swipe-to-pop. If provided, must perform a popPage with the given options object. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPrePop',
        propTypeProp: 'function',
        description:
          'Called just before a page is popped. It gets an event object with route information. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'initialRoute',
        propTypeProp: 'object',
        description:
          'This array contains the initial route of the navigator, which will be used to render the initial pages in the renderPage method. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPrePush',
        propTypeProp: 'function',
        description:
          'Called just before a page is pushed. It gets an event object with route information. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostPush',
        propTypeProp: 'function',
        description:
          'Called just after a page is pushed. It gets an event object with route information. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'route',
        propTypeProp: 'Object',
        description: 'The route that the navigator should push to.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animation',
        propTypeProp: 'string',
        description:
          'Animation name. Available animations are "slide", "lift", "fade" and "none".    These are platform based animations. For fixed animations, add "-ios" or "-md" suffix to the animation name. E.g. "lift-ios", "lift-md". Defaults values are "slide-ios" and "fade-md". Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'route',
        propTypeProp: 'Object',
        description: 'The route that the page should be reset to.',
      },
    ],
  },
  {
    title: 'Fab',
    href: 'https://onsen.io/v2/api/react/Fab.html',
    description:
      'The Floating action button is a circular button defined in the Material Design specification. They are often used to promote the primary action of the app. It can be displayed either as an inline element or in one of the corners. Normally it will be positioned in the lower right corner of the screen.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'ripple',
        propTypeProp: 'boolean',
        description:
          'If true,  the button will have a ripple effect when tapped. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onClick',
        propTypeProp: 'function',
        description:
          'This function will be called ones the button is clicked. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'position',
        propTypeProp: 'string',
        description:
          'The position of the button. Should be a string like "bottom right" or "top left". If this attribute is not defined it will be displayed as an inline element. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'If true, the button will be disabled. Optional.',
      },
    ],
  },
  {
    title: 'AlertDialogButton',
    href: 'https://onsen.io/v2/api/react/AlertDialogButton.html',
    description: 'Component that represent each button of the alert dialog.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onClick',
        propTypeProp: 'function',
        description:
          'This function will be called when the button is clicked. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the alert dialog button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the button is disabled. Optional.',
      },
    ],
  },
  {
    title: 'SplitterContent',
    href: 'https://onsen.io/v2/api/react/SplitterContent.html',
    description:
      'The SplitterContent element is used as a child element of Splitter. It contains the main content of the page while SplitterSide contains the list.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [],
  },
  {
    title: 'Radio',
    href: 'https://onsen.io/v2/api/react/Radio.html',
    description:
      'A radio button element. The component will automatically render as a Material Design radio button on Android devices.Most attributes that can be used for a normal <input type="radio"> element can also be used on the <Radio> component.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'checked',
        propTypeProp: 'boolean',
        description:
          'Controls the state of the radio button (controlled). Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'defaultChecked',
        propTypeProp: 'boolean',
        description:
          'Defined the state of the radio button at first render for uncontrolled inputs. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description:
          'Specifies whether the radio button is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'value',
        propTypeProp: 'union',
        description: 'Value of the radio button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'inputId',
        propTypeProp: 'string',
        description:
          'Specify the “id” attribute of the inner <input> element. This is useful when using  elements. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onChange',
        propTypeProp: 'function',
        description: 'Called when the radio button state changes. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the radio button. Optional.',
      },
    ],
  },
  {
    title: 'RouterNavigator',
    href: 'https://onsen.io/v2/api/react/RouterNavigator.html',
    description:
      'This component is a variant of the Navigator with a declarative API. In order to manage to display the pages, the  navigator needs to define the renderPage method, that takes an route and a navigator and  converts it to an page.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderPage',
        propTypeProp: 'function',
        description:
          'This function takes the current route object as a parameter and returns a react componen. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostPush',
        propTypeProp: 'function',
        description: 'Called just after a page is pushed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: '',
        propTypeProp: 'string',
        description:
          'Animation name. Available animations are "slide", "lift", "fade" and "none".    These are platform based animations. For fixed animations, add "-ios" or "-md" suffix to the animation name. E.g. "lift-ios", "lift-md". Defaults values are "slide-ios" and "fade-md". Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'swipeable',
        propTypeProp: 'union',
        description: 'Enables swipe-to-pop functionality for iOS. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'swipePop',
        propTypeProp: 'function',
        description:
          'Function called on swipe-to-pop. Must perform a popPage with the given options object. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostPop',
        propTypeProp: 'function',
        description: 'Called just after a page is popped. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'routeConfig',
        propTypeProp: 'shape',
        description:
          'This object must contain two properties: routeStack: An array of route objects, processStack: An array of process objects { type: push | pop | reset, route: userRoute } that describe the transition from the current state to the next state. Make sure that the route stack is not emptied before the animations for the processStack have completed. It is recommended to update the routeStack and empty the processStack in the ‘onPostPop’ callback. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPrePop',
        propTypeProp: 'function',
        description: 'Called just before a page is popped. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPrePush',
        propTypeProp: 'function',
        description: 'Called just before a page is pushed. Optional.',
      },
    ],
  },
  {
    title: 'BackButton',
    href: 'https://onsen.io/v2/api/react/BackButton.html',
    description:
      'Back button component for Toolbar. It enables to automatically to pop the top page of the navigator. When only presented with one page, the button is hidden automatically. The default behavior can be overridden using the onClick prop.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the back button. Optional.',
        propTypeVal: '',
        propTypeIsRequired: false,
      },
      {
        title: 'onClick',
        propTypeProp: 'function',
        description:
          'This function will be called ones the button is clicked. It overrides the default behavior of the back button. Optional.',
        propTypeVal: '',
        propTypeIsRequired: false,
      },
    ],
  },
  {
    title: 'GestureDetector',
    href: 'https://onsen.io/v2/api/react/GestureDetector.html',
    description:
      'Component to detect finger gestures within a wrapped element.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onSwipeLeft',
        propTypeProp: 'function',
        description: 'Called when the user swipes left. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPinchIn',
        propTypeProp: 'function',
        description: 'Called when the user pinches in. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDragRight',
        propTypeProp: 'function',
        description: 'Called when the user drags right. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPinch',
        propTypeProp: 'function',
        description: 'Called when the user pinches in or out. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onTouch',
        propTypeProp: 'function',
        description: 'Called when the user touches. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onSwipeUp',
        propTypeProp: 'function',
        description: 'Called when the user swipes up. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onRelease',
        propTypeProp: 'function',
        description: 'Called when the user releases. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onHold',
        propTypeProp: 'function',
        description: 'Called when the user holds. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPinchOut',
        propTypeProp: 'function',
        description: 'Called when the user pinches out. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onSwipe',
        propTypeProp: 'function',
        description: 'Called when the user swipes in any direction. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onTransform',
        propTypeProp: 'function',
        description: 'Called when the user transforms. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onSwipeRight',
        propTypeProp: 'function',
        description: 'Called when the user swipes right. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDoubleTap',
        propTypeProp: 'function',
        description: 'Called when the user double taps. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDragDown',
        propTypeProp: 'function',
        description: 'Called when the user drags down. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDrag',
        propTypeProp: 'function',
        description: 'Called when the user drags in any direction. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onTap',
        propTypeProp: 'function',
        description: 'Called when the user taps. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onSwipeDown',
        propTypeProp: 'function',
        description: 'Called when the user swipes down. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDragLeft',
        propTypeProp: 'function',
        description: 'Called when the user drags left. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onRotate',
        propTypeProp: 'function',
        description: 'Called when the user rotates. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDragUp',
        propTypeProp: 'function',
        description: 'Called when the user drags up. Optional.',
      },
    ],
  },
  {
    title: 'BottomToolbar',
    href: 'https://onsen.io/v2/api/react/BottomToolbar.html',
    description:
      'Toolbar component that is positioned at the bottom of the page.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description:
          'Specify modifier name to specify custom styles. Optional. Optional.',
      },
    ],
  },
  {
    title: 'CarouselItem',
    href: 'https://onsen.io/v2/api/react/CarouselItem.html',
    description:
      'Carousel item component. Used as a child of the <ons-carousel> element.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description:
          'Specify modifier name to specify custom styles. Optional. Optional.',
      },
    ],
  },
  {
    title: 'Dialog',
    href: 'https://onsen.io/v2/api/react/Dialog.html',
    description:
      'Dialog that is displayed on top of current screen. As opposed to the AlertDialog element, this component can contain any kind of content.  The dialog is useful for displaying menus, additional information or to ask the user to make a decision.  It will automatically be displayed as Material Design when running on an Android device.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isCancelable',
        propTypeProp: 'boolean',
        description:
          'Specifies whether the dialog is cancelable or not. A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the dialog. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'maskColor',
        propTypeProp: 'string',
        description:
          'Color of the background mask. Default is “rgba(0, 0, 0, 0.2)” Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreHide',
        propTypeProp: 'function',
        description: 'Called just before the alert dialog is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostShow',
        propTypeProp: 'function',
        description:
          'Called just after the alert dialog is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onCancel',
        propTypeProp: 'function',
        description:
          'Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isDisabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the dialog is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isOpen',
        propTypeProp: 'boolean',
        description:
          'Indicates whether the dialog is open and shown. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostHide',
        propTypeProp: 'function',
        description: 'Called just after the alert dialog is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreShow',
        propTypeProp: 'function',
        description:
          'Called just before the alert dialog is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animation',
        propTypeProp: 'string',
        description:
          'The animation used when showing and hiding the dialog. Can be either "none" or "default". Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
    ],
  },
  {
    title: 'Popover',
    href: 'https://onsen.io/v2/api/react/Popover.html',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animation',
        propTypeProp: 'string',
        description:
          'The animation used when showing and hiding the dialog. Can be either "none" or "default". Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostHide',
        propTypeProp: 'function',
        description: 'Called just after the alert dialog is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostShow',
        propTypeProp: 'function',
        description:
          'Called just after the alert dialog is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isDisabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the dialog is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreShow',
        propTypeProp: 'function',
        description:
          'Called just before the alert dialog is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isOpen',
        propTypeProp: 'boolean',
        description:
          'Indicates whether the dialog is open and shown. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreHide',
        propTypeProp: 'function',
        description: 'Called just before the alert dialog is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onCancel',
        propTypeProp: 'function',
        description:
          'Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'maskColor',
        propTypeProp: 'string',
        description:
          'Color of the background mask. Default is “rgba(0, 0, 0, 0.2)” Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'getTarget',
        propTypeProp: 'function',
        description:
          'This function should return react component or a domnode that the popover is showing on. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isCancelable',
        propTypeProp: 'boolean',
        description:
          'Specifies whether the dialog is cancelable or not. A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the dialog. Optional.',
      },
    ],
    description:
      'A component that displays a popover next to an element. The popover can be used to display extra information about a component or a tooltip. Another common way to use the popover is to display a menu when a button on the screen is tapped.',
  },
  {
    title: 'Icon',
    href: 'https://onsen.io/v2/api/react/Icon.html',
    description:
      'Displays an icon. The following icon suites are available: Font Awesome Ionicons Material Design Iconic Font',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'rotate',
        propTypeProp: 'enum',
        description:
          'Number of degrees to rotate the icon. Valid values are 90, 180 and 270. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'icon',
        propTypeProp: 'union',
        description:
          "can be either a string or an object. If it is an string, it is set to an specific icon like ‘ions-navicon’. If it is an object, it represents a dictionary of the icons depending on the modifier e.g.   {{default: 'ion-navicon', material: 'md-menu'}} Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'size',
        propTypeProp: 'union',
        description:
          'can be either a number or an object. If it is an number, it  specifies the icon size with a number in pixels. If it is an object, it represents a dictionary of the icon sizes depending on the modifier e.g.   {{default: 20, material: 18}} Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'spin',
        propTypeProp: 'boolean',
        description: 'Specify whether the icon should be spinning. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'fixedWidth',
        propTypeProp: 'boolean',
        description:
          'When used in a list, you want the icons to have the same width so that they align vertically by defining this attribute. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the icon. Optional.',
      },
    ],
  },
  {
    title: 'Switch',
    href: 'https://onsen.io/v2/api/react/Switch.html',
    description:
      'Switch component. The switch can be toggled both by dragging and tapping. Will automatically displays a Material Design switch on Android devices.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'checked',
        propTypeProp: 'boolean',
        description: 'Whether the switch is checked. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onChange',
        propTypeProp: 'function',
        description:
          'Called when the value of the switch changes (checked/unchecked) Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'inputId',
        propTypeProp: 'string',
        description:
          'Specify the id attribute of the inner <input> element. This is useful when using <label for="..."> elements. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'If set, the switch is disabled. Optional.',
      },
    ],
  },
  {
    title: 'Range',
    href: 'https://onsen.io/v2/api/react/Range.html',
    description: 'Range input component.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the progress indicator. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'value',
        propTypeProp: 'number',
        description: 'Current value of the element. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onChange',
        propTypeProp: 'function',
        description: 'Called when the value of the input changes. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'If true, the element is disabled. Optional.',
      },
    ],
  },
  {
    title: 'ListItem',
    href: 'https://onsen.io/v2/api/react/ListItem.html',
    description:
      'Component that represents each item in the list. Must be put inside the List component. The list item is composed of four parts that are represented with the left, center, right and expandable-content classes. These classes can be used to ensure that the content of the list items is properly aligned.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the list item. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'tappable',
        propTypeProp: 'boolean',
        description: 'Specifies whether the list item is tappable. Optional.',
      },
      {
        link: 'ListItem',
        'link-href': 'https://onsen.io/v2/api/react/ListItem.html',
        title: 'tapBackgroundColor',
        propTypeProp: 'string',
        description:
          'Changes the background color when tapped. For this to work, the attribute “tappable” needs to be set. The default color is “#d9d9d9”. It will display as a ripple effect on Android. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'expandable',
        propTypeProp: 'boolean',
        description:
          'Specifies whether list item can be expanded to reveal hidden content. Expanded content must be defined in div.expandable-content. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'expanded',
        propTypeProp: 'boolean',
        description:
          'For expandable list items, specifies whether item is expanded Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'lockOnDrag',
        propTypeProp: 'boolean',
        description:
          'Prevent vertical scrolling when the user drags horizontally. Optional.',
      },
    ],
  },
  {
    title: 'List',
    href: 'https://onsen.io/v2/api/react/List.html',
    description:
      'Component for representing a list. It takes an array called datasource and calls renderRow(row, index) for every row.  Furthermore, the header and the footer can be specified with renderRow and renderHeader respectively.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderFooter',
        propTypeProp: 'function',
        description:
          'Function to specify the rendering function for the footer Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderHeader',
        propTypeProp: 'function',
        description:
          'Function to specify the rendering function for the header Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description:
          'Specify modifier name to specify custom styles. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'dataSource',
        propTypeProp: 'array',
        description: 'Source of the list data. Should be an array. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderRow',
        propTypeProp: 'function',
        description:
          'Function to specify the rendering function for every element in the dataSource. Optional.',
      },
    ],
  },
  {
    title: 'ProgressCircular',
    href: 'https://onsen.io/v2/api/react/ProgressCircular.html',
    description:
      'This component displays a circular progress indicator. It can either be used to show how much of a task has been completed or to show a looping animation to indicate that an operation is currently running.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'secondaryValue',
        propTypeProp: 'number',
        description:
          'Current secondary progress. Should be a value between 0 and 100. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the progress indicator. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'value',
        propTypeProp: 'number',
        description:
          'Current progress. Should be a value between 0 and 100. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'indeterminate',
        propTypeProp: 'boolean',
        description:
          'If this property is set, an infinite looping animation will be shown. Optional.',
      },
    ],
  },
  {
    title: 'Segment',
    href: 'https://onsen.io/v2/api/react/Segment.html',
    description: 'Segment component.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'tabbarId',
        propTypeProp: 'string',
        description:
          'ID of the <Tabbar> to “connect” to the segment. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the segment. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostChange',
        propTypeProp: 'function',
        description: 'Called after the active button changes. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'index',
        propTypeProp: 'number',
        description: 'The index of the button to highlight. Optional.',
      },
    ],
  },
  {
    title: 'Splitter',
    href: 'https://onsen.io/v2/api/react/Splitter.html',
    description:
      'A component that enables responsive layout by implementing both a two-column layout and a sliding menu layout. It can be configured to automatically expand into a column layout on large screens and collapse the menu on smaller screens. When the menu is collapsed the user can open it by swiping.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
    ],
  },
  {
    title: 'Modal',
    href: 'https://onsen.io/v2/api/react/Modal.html',
    description:
      'A modal component covers the entire screen. Underlying components are not subject to any events while the modal component is shown. This component can be used to block user input while some operation is running or to show some information to the user.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreShow',
        propTypeProp: 'function',
        description: 'Called just before the modal is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreHide',
        propTypeProp: 'function',
        description: 'Called just before the modal is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animation',
        propTypeProp: "enum'",
        description:
          'Animation name. Available animations are "fade", "lift" and "none". Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostHide',
        propTypeProp: 'function',
        description: 'Called just after the modal is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostShow',
        propTypeProp: 'function',
        description: 'Called just after the modal is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isOpen',
        propTypeProp: 'boolean',
        description: 'When true the modal will show itself. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
    ],
  },
  {
    title: 'Tab',
    href: 'https://onsen.io/v2/api/react/Tab.html',
    description: 'Represents a tab inside tab bar.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [],
  },
  {
    title: 'SpeedDial',
    href: 'https://onsen.io/v2/api/react/SpeedDial.html',
    description:
      'Element that displays a Material Design Speed Dialog component. It is useful when there are more than one primary action that can be performed in a page. The Speed dial looks like a Fab element but will expand a menu when tapped.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'direction',
        propTypeProp: 'enum',
        description:
          'Specify the direction the items are displayed. Possible values are “up”, “down”, “left” and “right”. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the speed dial. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'position',
        propTypeProp: 'string',
        description:
          'Specify the vertical and horizontal position of the component.    I.e. to display it in the top right corner specify “right top”.    Choose from “right”, “left”, “top” and “bottom”. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'Specify if button should be disabled. Optional.',
      },
    ],
  },
  {
    title: 'Select',
    href: 'https://onsen.io/v2/api/react/Select.html',
    description: 'Select input component.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'form',
        propTypeProp: 'string',
        description:
          'Associate a select element to an existing form on the page, even if not nested. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the select box. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'multiple',
        propTypeProp: 'boolean',
        description:
          'If this attribute is defined, multiple options can be selected at once. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'required',
        propTypeProp: 'boolean',
        description:
          'Make the select input required for submitting the form it is part of. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'size',
        propTypeProp: 'string',
        description:
          'How many options are displayed; if there are more than the size then a scroll appears to navigate them Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'value',
        propTypeProp: 'string',
        description:
          'Use this prop to set the selected option value. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'autofocus',
        propTypeProp: 'boolean',
        description:
          'Element automatically gains focus on page load. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onChange',
        propTypeProp: 'function',
        description: 'Called when the value of the select changes. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the select is disabled. Optional.',
      },
    ],
  },
  {
    title: 'Row',
    href: 'https://onsen.io/v2/api/react/Row.html',
    description:
      'Represents a row in the grid system. Use with Col to layout components.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'verticalAlign',
        propTypeProp: 'enum',
        description:
          'Short hand attribute for aligning vertically. Valid values are top, bottom, and center. Optional.',
      },
    ],
  },
  {
    title: 'Tabbar',
    href: 'https://onsen.io/v2/api/react/Tabbar.html',
    description:
      'Component to display a tabbar on either the top or the bottom of a page. To define the tabs and the content the property renderTabs need to be implemented, that returns an array of tabs and their content. See the example for specifics.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'visible',
        propTypeProp: 'boolean',
        description:
          'If true, the tabbar is shown on the screen. Otherwise, the tabbar is not shown. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'swipeable',
        propTypeProp: 'boolean',
        description: 'Ennable swipe interaction. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'tabBorder',
        propTypeProp: 'boolean',
        description:
          'If true, the tabs show a dynamic bottom border. Only works for iOS since the border is always visible in Material Design. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostChange',
        propTypeProp: 'function',
        description: 'Called just after the tab is changed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animation',
        propTypeProp: 'enum',
        description:
          'If this attribute is set to "none" the transitions will not be animated. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'index',
        propTypeProp: 'number',
        description: 'The index of the tab to highlight. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'ignoreEdgeWidth',
        propTypeProp: 'boolean',
        description:
          'Distance in pixels from both edges. Swiping on these areas will prioritize parent components such as Splitter or Navigator. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onReactive',
        propTypeProp: 'function',
        description:
          'Called if the already open tab is tapped again. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderTabs',
        propTypeProp: 'function',
        description:
          'Function that returns an array of objects with the keys content and tab. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreChange',
        propTypeProp: 'function',
        description: 'Called just before the tab is changed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onSwipe',
        propTypeProp: 'function',
        description:
          'Hook called whenever the user slides the tabbar. It gets a decimal index and an animationOptions object as arguments. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'position',
        propTypeProp: 'string',
        description:
          'Tabbar’s position. Available values are "bottom" and "top". Use "auto" to choose position depending on platform (iOS bottom, Android top). Optional.',
      },
    ],
  },
  {
    title: 'SpeedDialItem',
    href: 'https://onsen.io/v2/api/react/SpeedDialItem.html',
    description:
      'This component displays the child elements of the Material Design Speed dial component.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onClick',
        propTypeProp: 'function',
        description:
          'This function will be called ones the button is clicked. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the button. Optional.',
      },
    ],
  },
  {
    title: 'Ripple',
    href: 'https://onsen.io/v2/api/react/Ripple.html',
    description: 'Adds a Material Design “ripple” effect to an element.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        title: 'color',
        propTypeProp: 'string',
        description: 'Color of the ripple effect. Optional.',
        propTypeVal: '',
        propTypeIsRequired: false,
      },
      {
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the button is disabled. Optional.',
        propTypeVal: '',
        propTypeIsRequired: false,
      },
      {
        title: 'background',
        propTypeProp: 'string',
        description: 'Color of the background. Optional.',
        propTypeVal: '',
        propTypeIsRequired: false,
      },
    ],
  },
  {
    title: 'LazyList',
    href: 'https://onsen.io/v2/api/react/LazyList.html',
    description:
      'Using this component a list with millions of items can be rendered without a drop in performance. It does that by “lazily” loading elements into the DOM when they come into view and removing items from the DOM when they are not visible.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'length',
        propTypeProp: 'number',
        description: 'The length of the list. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the lazy list. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderRow',
        propTypeProp: 'function',
        description:
          'A function given the index of the to display row, renders it. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'calculateItemHeight',
        propTypeProp: 'function',
        description:
          'A function given the index of the to row, returns the height of it. Required.',
      },
    ],
  },
  {
    title: 'Toast',
    href: 'https://onsen.io/v2/api/react/Toast.html',
    description:
      'The Toast or Snackbar component is useful for displaying dismissable information or simple actions at (normally) the bottom of the page. This component does not block user input, allowing the app to continue its flow. Furthermore, it can be automatically hidden after a timeout.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animation',
        propTypeProp: 'string',
        description:
          'Animation name. Available animations are "default", "ascend" (Android), "lift" (iOS), "fall", "fade" or "none". Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreShow',
        propTypeProp: 'function',
        description: 'Called just before the toast is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreHide',
        propTypeProp: 'function',
        description: 'Called just before the toast is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostShow',
        propTypeProp: 'function',
        description: 'Called just after the toast is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the toast. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isOpen',
        propTypeProp: 'boolean',
        description: 'Indicates whether the toast open and shown. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostHide',
        propTypeProp: 'function',
        description: 'Called just after the toast is hidden. Optional.',
      },
    ],
  },
  {
    title: 'Button',
    href: 'https://onsen.io/v2/api/react/Button.html',
    description:
      'Button component. If you want to place a button in a toolbar, use ToolbarButton or BackButton instead. Will automatically display as a Material Design button with a ripple effect on Android.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'ripple',
        propTypeProp: 'boolean',
        description:
          'Specifies whether the button has a ripple effect. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the button is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onClick',
        propTypeProp: 'function',
        description:
          'This function will be called when the button is clicked. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the button. Optional.',
      },
    ],
  },
  {
    title: 'ActionSheetButton',
    href: 'https://onsen.io/v2/api/react/ActionSheetButton.html',
    description: 'Component that represent each button of the action sheet.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'icon',
        propTypeProp: 'string',
        description:
          'Creates an Icon component with this string. Only visible on Android. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onClick',
        propTypeProp: 'function',
        description:
          'This function will be called when the button is clicked. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the action sheet button. Optional.',
      },
    ],
  },
  {
    title: 'Input',
    href: 'https://onsen.io/v2/api/react/Input.html',
    description:
      'An input element. The type attribute can be used to change the input type. All text input types as well as checkbox and radio are supported. The component will automatically render as a Material Design input on Android devices. Most attributes that can be used for a normal <input> element can also be used on the <ons-input> element..',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the input is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'placeholder',
        propTypeProp: 'string',
        description:
          'Placeholder text. In Material Design this placeholder will be a floating label. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'defaultValue',
        propTypeProp: 'union',
        description:
          'Content of the input at first render (uncontrolled). Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'inputId',
        propTypeProp: 'string',
        description:
          'Specify the “id” attribute of the inner <input> element. This is useful when using  elements Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onChange',
        propTypeProp: 'function',
        description: 'Called when the text of the input changes. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'type',
        propTypeProp: 'string',
        description:
          'Specify the input type. This is the same as the “type” attribute for normal inputs. It expects strict text types such as text, password, etc. For checkbox, radio button, select or range, please have a look at the corresponding components.   Please take a look at MDN for an exhaustive list of possible values. Depending on the platform and browser version some of these might not work. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'float',
        propTypeProp: 'boolean',
        description:
          'If this attribute is present, the placeholder will be animated in Material Design. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'readOnly',
        propTypeProp: 'boolean',
        description: 'Specifies whether the input is read-only. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'value',
        propTypeProp: 'union',
        description: 'Content of the input (controlled). Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the input. Optional.',
      },
    ],
  },
  {
    title: 'ListHeader',
    href: 'https://onsen.io/v2/api/react/ListHeader.html',
    description:
      'Header element for list items. Must be put inside ons-list component.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description:
          'Specify modifier name to specify custom styles. Optional. Optional.',
      },
    ],
  },
  {
    title: 'AlertDialog',
    href: 'https://onsen.io/v2/api/react/AlertDialog.html',
    description:
      'Alert dialog that is displayed on top of the current screen. Useful for displaying questions, warnings or error messages to the user. The title, content and buttons can be easily customized and it will automatically switch style based on the platform.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostHide',
        propTypeProp: 'function',
        description: 'Called just after the alert dialog is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreHide',
        propTypeProp: 'function',
        description: 'Called just before the alert dialog is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isDisabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the dialog is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animation',
        propTypeProp: 'string',
        description:
          'The animation used when showing and hiding the dialog. Can be either "none" or "default". Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'maskColor',
        propTypeProp: 'string',
        description:
          'Color of the background mask. Default is “rgba(0, 0, 0, 0.2)” Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostShow',
        propTypeProp: 'function',
        description:
          'Called just after the alert dialog is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the dialog. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onCancel',
        propTypeProp: 'function',
        description:
          'Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isOpen',
        propTypeProp: 'boolean',
        description:
          'Indicates whether the dialog is open and shown. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isCancelable',
        propTypeProp: 'boolean',
        description:
          'Specifies whether the dialog is cancelable or not. A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreShow',
        propTypeProp: 'function',
        description:
          'Called just before the alert dialog is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
    ],
  },
  {
    title: 'ListTitle',
    href: 'https://onsen.io/v2/api/react/ListTitle.html',
    description:
      'Title element for lists. Usually comes before ons-list component.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description:
          'Specify modifier name to specify custom styles. Optional. Optional.',
      },
    ],
  },
  {
    title: 'ToolbarButton',
    href: 'https://onsen.io/v2/api/react/ToolbarButton.html',
    description:
      'Button component for the Toolbar. Using this component gives a nice default style.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'Indicates whether the button is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the button. Optional.',
      },
    ],
  },
  {
    title: 'ProgressBar',
    href: 'https://onsen.io/v2/api/react/ProgressBar.html',
    description:
      'The component is used to display a linear progress bar. It can either display a progress bar that shows the user how much of a task has been completed. In the case where the percentage is not known it can be used to display an animated progress bar so the user can see that an operation is in progress.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'indeterminate',
        propTypeProp: 'boolean',
        description:
          'If this property is set, an infinite looping animation will be shown. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'value',
        propTypeProp: 'number',
        description:
          'Current progress. Should be a value between 0 and 100. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the progress indicator. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'secondaryValue',
        propTypeProp: 'number',
        description:
          'Current secondary progress. Should be a value between 0 and 100. Optional.',
      },
    ],
  },
  {
    title: 'Checkbox',
    href: 'https://onsen.io/v2/api/react/Checkbox.html',
    description:
      'A checkbox element. The component will automatically render as a Material Design checkbox on Android devices. Most attributes that can be used for a normal <input type="checkbox"> element can also be used on the <Checkbox> component.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'checked',
        propTypeProp: 'boolean',
        description:
          'Defined the state of the radio button at first render for uncontrolled inputs. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'inputId',
        propTypeProp: 'string',
        description:
          'Specify the “id” attribute of the inner <input> element. This is useful when using  elements. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the checkbox. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'value',
        propTypeProp: 'union',
        description: 'Value of the checkbox. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'disabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the checkbox is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onChange',
        propTypeProp: 'function',
        description: 'Called when the checkbox state changes. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'checked',
        propTypeProp: 'boolean',
        description:
          'Controls the state of the checkbox (controlled). Optional.',
      },
    ],
  },
  {
    title: 'Page',
    href: 'https://onsen.io/v2/api/react/Page.html',
    description:
      'This component is handling the entire page. The content can be scrolled. To add fixed content that doesn’t scroll with the page the renderFixed prop is used. A page toolbar can be added with the renderToolbar prop.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onHide',
        propTypeProp: 'function',
        description: 'Called after the page is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onInfiniteScroll',
        propTypeProp: 'function',
        description:
          'Called when scrolling to the bottom of the page. It gets a ‘done’ callback (first argument) that must be called when it’s finished. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderBottomToolbar',
        propTypeProp: 'function',
        description:
          'This function renders the bottom toolbar of the page. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description:
          'Specify modifier name to specify custom styles. Optional. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onInit',
        propTypeProp: 'function',
        description: 'Fired right after the page is attached. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'contentStyle',
        propTypeProp: 'object',
        description:
          'Specify the style of the page content. Optional. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderModal',
        propTypeProp: 'function',
        description:
          'This function renders a modal that masks current screen. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onShow',
        propTypeProp: 'function',
        description: 'Called Fired right after the page is shown. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderToolbar',
        propTypeProp: 'function',
        description: 'This function renders the toolbar of the page. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'renderFixed',
        propTypeProp: 'function',
        description:
          'This function renders fixed content of the page. Can be used to render Fab or SpeedDial components as well as other components that don’t scroll with the page. Optional.',
      },
    ],
  },
  {
    title: 'Col',
    href: 'https://onsen.io/v2/api/react/Col.html',
    description:
      'Represents a column in the grid system. Use with <ons-row> to layout components.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'width',
        propTypeProp: 'union',
        description:
          'The width of the column. Valid values are css width values (“10%”, 50). Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'verticalAlign',
        propTypeProp: 'enum',
        description:
          'Short hand attribute for aligning vertically. Valid values are top, bottom, and center. Optional.',
      },
    ],
  },
  {
    title: 'SplitterSide',
    href: 'https://onsen.io/v2/api/react/SplitterSide.html',
    description:
      'The SplitterContent element is used as a child element of Splitter. It contains the main content of the page while SplitterSide contains the list.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'side',
        propTypeProp: 'enum',
        description:
          'Specify which side of the screen the SplitterSide element is located. Possible values are "left" and "right". Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isOpen',
        propTypeProp: 'boolean',
        description: 'Specifies whether the menu is open. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'openThreshold',
        propTypeProp: 'number',
        description:
          'Specify how much the menu needs to be swiped before opening. A value between 0 and 1. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'width',
        propTypeProp: 'union',
        description:
          'Specifies the width of the menu with a number (for pixels) or a string (e.g. “20%” for percentage). Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreClose',
        propTypeProp: 'function',
        description: 'Called before the menu closes. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreOpen',
        propTypeProp: 'function',
        description: 'Called before the menu opens. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'swipeable',
        propTypeProp: 'boolean',
        description: 'Ennable swipe interaction on collapse mode. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onModeChange',
        propTypeProp: 'function',
        description: 'Called after the component’s mode changes. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onClose',
        propTypeProp: 'function',
        description: 'Called after the menu is closed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'mode',
        propTypeProp: 'enum',
        description:
          'Current mode. Possible values are "collapse" or "split". This attribute is read only. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'collapse',
        propTypeProp: 'union',
        description:
          'Specify the collapse behavior. Valid values are "portrait", "landscape" or a media query.    The strings "portrait" and "landscape" means the view will collapse when device is in landscape or portrait orientation.    If the value is not defined, the view always be in "collapse" mode. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animation',
        propTypeProp: 'string',
        description:
          'Specify the animation. Use one of overlay, push, reveal, or default. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onOpen',
        propTypeProp: 'function',
        description: 'Called after the menu is opened. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'swipeTargetWidth',
        propTypeProp: 'union',
        description:
          'Specifies the width of the menu with a number (for pixels) or a string (e.g. “20%” for percentage). Optional.',
      },
    ],
  },
  {
    title: 'Toolbar',
    href: 'https://onsen.io/v2/api/react/Toolbar.html',
    description:
      'Toolbar component that can be used with navigation. Left, center and right container can be specified by class names. This component will automatically displays as a Material Design toolbar when running on Android devices.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description:
          'Specify modifier name to specify custom styles. Optional. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'visible',
        propTypeProp: 'boolean',
        description:
          'If true, the toolbar is shown on the screen. Otherwise, the toolbar is not shown. Optional.',
      },
    ],
  },
  {
    title: 'Card',
    href: 'https://onsen.io/v2/api/react/Card.html',
    description: 'Card component that can be used to display content.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description:
          'Specify modifier name to specify custom styles. Optional. Optional.',
      },
    ],
  },
  {
    title: 'ActionSheet',
    href: 'https://onsen.io/v2/api/react/ActionSheet.html',
    description:
      'Action/bottom sheet that is displayed on top of current screen. The action sheet is useful for displaying a list of options and asking the user to make a decision. An ActionSheetButton component is provided for this purpose, although it can contain any type of content. It will automatically be displayed as Material Design (bottom sheet) when running on an Android device.',
    isActive: true,
    isPublic: true,
    componentImport: 'react-onsenui',
    provider: '60d1e9d6185b0b4f80ad6ab8',
    techno: '5ee7b6b97127c03650219837',
    uid: '5ee6c9e92af38140dc55cc5b',
    propType: '5ee7b8b6a426614c8c02d0ed',
    componentProps: [
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isOpen',
        propTypeProp: 'boolean',
        description:
          'Indicates whether the dialog is open and shown. Required.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreShow',
        propTypeProp: 'function',
        description:
          'Called just before the action sheet is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isCancelable',
        propTypeProp: 'boolean',
        description:
          'Specifies whether the dialog is cancelable or not. A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onDeviceBackButton',
        propTypeProp: 'function',
        description: 'Custom handler for device back button. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'isDisabled',
        propTypeProp: 'boolean',
        description: 'Specifies whether the dialog is disabled. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostShow',
        propTypeProp: 'function',
        description:
          'Called just after the action sheet is displayed. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPostHide',
        propTypeProp: 'function',
        description: 'Called just after the action sheet is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animationOptions',
        propTypeProp: 'object',
        description:
          "Specify the animation’s duration, delay and timing. E.g.  {duration: 0.2, delay: 0.4, timing: 'ease-in'}. Optional.",
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'maskColor',
        propTypeProp: 'string',
        description:
          'Color of the background mask. Default is “rgba(0, 0, 0, 0.2)” Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'modifier',
        propTypeProp: 'string',
        description: 'The appearance of the dialog. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onPreHide',
        propTypeProp: 'function',
        description: 'Called just before the action sheet is hidden. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'onCancel',
        propTypeProp: 'function',
        description:
          'Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices. Optional.',
      },
      {
        propTypeVal: '',
        propTypeIsRequired: false,
        title: 'animation',
        propTypeProp: 'string',
        description:
          'The animation used when showing and hiding the dialog. Can be either "none" or "default". Optional.',
      },
    ],
  },
]
