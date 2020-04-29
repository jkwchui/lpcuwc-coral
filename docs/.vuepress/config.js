const moment = require('moment');
const path = require("path");

module.exports = {
    title: '🖐️☝️黃金週',
    description: '',
    base: '/',
    theme: 'casper',
    docsDir: 'docs',
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    head: [
        ['link',
            {
                rel: 'icon',
                href: '/logo.png'
            }
        ],
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {
                text: '簡介 Introduction',
                link: '/posts/intro'
            },
            {
                text: '地圖 Map',
                link: '/posts/map'
            },
            {
                text: '網上商店 Online shops',
                link: '/posts/online'
            },
            {
                text: '店主 Owners',
                link: '/posts/shop-owners'
            },
        ],
        // sidebarDepth: 1,
        // sidebar: {
        //     '/about/': [
        //         ['./', 'About'],
        //         {
        //             title: 'What we do',
        //             collapsable: false,
        //             children: [
        //                 ['./protocols/', "Protocols"],
        //                 ['./training/', 'Training'],
        //                 ['./funding/', 'Funding'],
        //                 ['./team/', 'The Team'],
        //                 ['./history/', 'History'],
        //             ],
        //         },
        //     ],
        //     '/data/': [{
        //             title: '',
        //             collapsable: false,
        //             children: [
        //                 ['./', 'Description'],
        //                 ['./visuals/', 'Visual']
        //                 ['./stat/', 'Statistical'],
        //             ],
        //         },
        //         {
        //             title: 'Past Reports',
        //             collapsable: false,
        //             children: [
        //                 ['./reports/2008/', '2008'],
        //                 // ['./obs/gear/', 'Gear'],
        //                 ['./reports/2014-17/', '2014-17']
        //             ],
        //         },
        //     ],
        //     '/apply/': [{
        //         title: 'How to Apply',
        //         collapsable: true,
        //     }],
        //     '/resources/': [{
        //         title: 'Resources',
        //         collapsable: true,
        //         children: [
        //             ['./', 'Resources'],
        //             ['./downloads/', 'Downloads'],
        //             ['./tutorials/', 'Tutorials'],
        //             ['./partners/', 'Partners'],
        //         ],
        //     }],
        // },
        // repo: 'jkwchui/51goldenweek',
        displayAllHeaders: true,
        footer: [{
            text: 'Latest Posts',
            link: '/posts'
          }, 
          {
            text: 'Telegram',
            link: 'https://t.me/HKGoldenWeek'
          }, 
          {
            text: 'Facebook',
            link: 'https://www.facebook.com/FiveDemandsWeek/'
          },
          {
            text: 'Instagram',
            link: 'https://instagram.com/fivedemandsweek'
          },  
          ],
          social: {
            facebook: 'https://www.facebook.com/FiveDemandsWeek/',
            instagram: 'https://instagram.com/fivedemandsweek',
          }
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // Don't forget to install moment yourself
                    // const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ],
        // [
        //     '@vuepress/blog',
        //     {
        //         postsDir: '../jon/_posts'
        //     }
        // ],
        // ['@vuepress/register-components',
        //     {
        //         componentsDir: [
        //             '.'
        //         ]
        //     }
        // ],
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        '@vuepress/back-to-top',
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-134636637-2' // UA-00000000-0
            }
        ],
        {
            '@vuepress/medium-zoom': {
                selector: 'img.zoom-custom-imgs',
                // medium-zoom options here
                // See: https://github.com/francoischalifour/medium-zoom#options
                options: {
                    margin: 16
                }
            }
        },
        [
            'vuepress-plugin-smooth-scroll',
            {
                'vuepress-plugin-smooth-scroll': true
            }
        ],
        // [
        //     '@goy/svg-icons',
        //     {
        //         // Specific the folder with absolute path
        //         // where your gonna put svg icons in
        //         svgsDir: `${__dirname}/svgs`
        //     }
        // ],
        'tabs'
        // 'flowchart',
    ],
    markdown: {
        // options for markdown-it-anchor
        anchor: {
            permalink: true
        },
        // options for markdown-it-toc
        toc: {
            includeLevel: [1, 2, 3, 4],
            forceFullToC: true
        },
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-checkbox'), {
                divWrap: true,
                divClass: 'cb',
                idPrefix: 'cbx_'
            })
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-attrs'))
            md.use(require('markdown-it-abbr'))
            md.use(require('markdown-it-video'), {
                youtube: {
                    width: 640,
                    height: 390
                },
                vimeo: {
                    width: 640,
                    height: 400
                },
                vine: {
                    width: 600,
                    height: 600,
                    embed: 'simple'
                },
                prezi: {
                    width: 550,
                    height: 400
                }
            })
            md.use(require('markdown-it-sup'))
            md.use(require('markdown-it-sub'))
            md.use(require('markdown-it-imsize'), {
                autofill: true
            })
            // md.use(require('markdown-it-center-text'))
            md.use(require('markdown-it-implicit-figures'), {
                dataType: true, // <figure data-type="image">, default: false
                figcaption: true, // <figcaption>alternative text</figcaption>, default: false
                tabindex: true, // <figure tabindex="1+n">..., default: false
                link: true
            })
        }
    }
};