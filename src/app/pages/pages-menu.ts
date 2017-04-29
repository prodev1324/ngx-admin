import { NgaMenuItem } from '@nga/theme';

import { List } from 'immutable';

export const menuItems: List<NgaMenuItem> = List([
  {
    title: 'Dashboard',
    icon: 'ion ion-ios-home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'ion ion-ios-keypad-outline',
    link: '/pages/ui-features',
  },
  {
    title: 'Components',
    icon: 'ion ion-ios-gear-outline',
    link: '/pages/components',
  },
  {
    title: 'Maps',
    icon: 'ion ion-ios-location-outline',
    link: '/pages/maps',
  },
  {
    title: 'Charts',
    icon: 'ion ion-arrow-graph-up-right',
    link: '/pages/charts',
  },
  {
    title: 'Editors',
    icon: 'ion ion-edit',
    link: '/pages/editors',
    children: List([
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ]),
  },
]);
