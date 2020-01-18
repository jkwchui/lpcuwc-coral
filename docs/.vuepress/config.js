const moment = require('moment');
const path = require("path");

module.exports = {
    title: 'Coral Monitoring LPCUWC-HK',
    description: '',
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
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': '../../../docs/image'
            }
        }
    },
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en', // this will be set as the lang attribute on <html>
            title: 'Coral Monitoring LPCUWC-HK',
            description: ''
        },
        // '/zh-S/': {
        //     lang: 'zh-Hans',
        //     title: '珊瑚觀察 - 香港聯合世界書院',
        //     description: ''
        // },
        '/zh/': {
            lang: 'zh-Hant',
            title: '珊瑚觀察 - 香港聯合世界書院',
            description: ''
        },
    },
    themeConfig: {
        locales: {

            '/': {
                // text for the language dropdown
                selectText: '💬 Languages 語言',
                // label for this locale in the language dropdown
                label: 'Eng 🇬🇧🇺🇸🇨🇦🇦🇺',
                // text for the edit-on-github link
                // editLinkText: 'Edit this page on GitHub',
                // config for Service Worker 
                serviceWorker: {
                    updatePopup: {
                        message: "Updates available",
                        buttonText: "Refresh"
                    }
                },
                nav: [{
                        text: 'about',
                        link: '/about/'
                    },
                    {
                        text: 'Data',
                        link: '/data/'
                    },
                    {
                        text: 'Apply',
                        link: '/apply/'
                    },
                    // {
                    //     text: 'Organizations',
                    //     link: '/org/'
                    // },
                    {
                        text: 'Resources',
                        link: '/resources/'
                    },
                ],
                sidebarDepth: 1,
                sidebar: {
                    '/about/': [
                        ['./', 'about'],
                        {
                            title: 'What we do',
                            collapsable: false,
                            children: [
                                ['./protocols/', "Protocols"],
                                ['./training/', 'Training'],
                                ['./funding/', 'Funding'],
                                ['./team/', 'The Team'],
                                ['./history/', 'History'],
                            ],
                        },
                    ],
                    '/data/': [{
                            title: '',
                            collapsable: false,
                            children: [
                                ['./', 'Description'],
                                ['./visuals/', 'Visual']
                                ['./stat/', 'Statistical'],
                            ],
                        },
                        {
                            title: 'Past Reports',
                            collapsable: false,
                            children: [
                                ['./reports/2008/', '2008'],
                                // ['./obs/gear/', 'Gear'],
                                ['./reports/2014-17/', '2014-17']
                            ],
                        },
                    ],
                    '/apply/': [{
                        title: 'How to Apply',
                        collapsable: true,
                    }],
                    '/resources/': [{
                        title: 'Resources',
                        collapsable: true,
                        children: [
                            ['./', 'Resources'],
                            ['./downloads/', 'Downloads'],
                            ['./tutorials/', 'Tutorials'],
                            ['./partners/', 'Partners'],
                        ],
                    }],
                },
            },

            '/': {
                // text for the language dropdown
                selectText: '💬 Languages 語言',
                // label for this locale in the language dropdown
                label: 'Eng 🇬🇧🇺🇸🇨🇦🇦🇺',
                // text for the edit-on-github link
                // editLinkText: 'Edit this page on GitHub',
                // config for Service Worker 
                serviceWorker: {
                    updatePopup: {
                        message: "Updates available",
                        buttonText: "Refresh"
                    }
                },
                nav: [{
                        text: 'about',
                        link: '/about/'
                    },
                    {
                        text: 'Data',
                        link: '/data/'
                    },
                    {
                        text: 'Apply',
                        link: '/apply/'
                    },
                    // {
                    //     text: 'Organizations',
                    //     link: '/org/'
                    // },
                    {
                        text: 'Resources',
                        link: '/resources/'
                    },
                ],
                sidebarDepth: 1,
                sidebar: {
                    '/about/': [
                        ['./', 'about'],
                        {
                            title: 'What we do',
                            collapsable: false,
                            children: [
                                ['./protocols/', "Protocols"],
                                ['./training/', 'Training'],
                                ['./funding/', 'Funding'],
                                ['./team/', 'The Team'],
                                ['./history/', 'History'],
                            ],
                        },
                    ],
                    '/data/': [{
                        title: 'Data Description',
                        collapsable: false,
                        children: [
                            ['./', 'Description'],
                            ['./visuals/', 'Visual'],
                            ['./stat/', 'Statistical'],
                            ['./reports/', 'Past Reports'],
                        ],
                    }],
                    '/apply/': [{
                        title: 'How to Apply',
                        collapsable: false,
                    }],
                    '/resources/': [{
                        title: 'Resources',
                        collapsable: true,
                        children: [
                            ['./', 'Resources'],
                            ['./downloads/', 'Downloads'],
                            ['./tutorials/', 'Tutorials'],
                            ['./partners/', 'Partners'],
                        ],
                    }],
                },
            },

            '/zh/': {
                // text for the language dropdown
                selectText: '💬 Languages 語言',
                // label for this locale in the language dropdown
                label: '繁體中文 🇭🇰🇹🇼',
                // text for the edit-on-github link
                // editLinkText: 'Edit this page on GitHub',
                // config for Service Worker 
                serviceWorker: {
                    updatePopup: {
                        message: "Updates available",
                        buttonText: "Refresh"
                    }
                },
                nav: [{
                        text: 'about',
                        link: '/zh/about/'
                    },
                    {
                        text: 'Data',
                        link: '/zh/data/'
                    },
                    {
                        text: 'Apply',
                        link: '/zh/apply/'
                    },
                    // {
                    //     text: 'Organizations',
                    //     link: '/org/'
                    // },
                    {
                        text: 'Resources',
                        link: '/zh/resources/'
                    },
                ],
                sidebarDepth: 1,
                sidebar: {
                    '/zh/about/': [
                        ['./', 'about'],
                        {
                            title: 'What we do',
                            collapsable: false,
                            children: [
                                ['./protocols/', "Protocols"],
                                ['./training/', 'Training'],
                                ['./funding/', 'Funding'],
                                ['./team/', 'The Team'],
                                ['./history/', 'History'],
                            ],
                        },
                    ],
                    '/zh/data/': [{
                        title: 'Data Description',
                        collapsable: false,
                        children: [
                            ['./', 'Description'],
                            ['./visuals/', 'Visual'],
                            ['./stat/', 'Statistical'],
                            ['./reports/', 'Past Reports'],
                        ],
                    }],
                    '/zh/apply/': [{
                        title: 'How to Apply',
                        collapsable: true,
                    }],
                    '/zh/resources/': [{
                        title: 'Resources',
                        collapsable: true,
                        children: [
                            ['./', 'Resources'],
                            ['./downloads/', 'Downloads'],
                            ['./tutorials/', 'Tutorials'],
                            ['./partners/', 'Partners'],
                        ],
                    }],
                },
            },
        },
        // repo: 'jkwchui/chem-jon-hk',
        displayAllHeaders: true,
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
        // '@vuepress/medium-zoom',
        '@vuepress/back-to-top',
        {
            '@vuepress/pwa': {
                serviceWorker: true,
                updatePopup: {
                    message: "有可更新項目",
                    buttonText: "更新頁面"
                }
            }
        },
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