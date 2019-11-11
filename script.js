TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "id": "panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "id": "overlay_5BF17E64_57E1_C692_416D_95365AED388A",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9, this.camera_59324516_57E1_5ABE_41B2_84DDFF171D44); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59,
           "url": "media/panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.86,
        "yaw": 148.73,
        "pitch": -31.28
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 118,
           "url": "media/panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.86,
        "yaw": 148.73,
        "pitch": -31.28
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "partial": false,
  "adjacentPanoramas": [
   {
    "backwardYaw": 176.05,
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMin": 60,
     "id": "panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "id": "overlay_5A84ACFA_57E3_4B76_41D1_51247F89709E",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A, this.camera_58B924D0_57E1_5BB2_418D_ED557798FB6B); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 36,
              "width": 34,
              "url": "media/panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.07,
           "yaw": 176.05,
           "pitch": -2.24
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 73,
              "width": 69,
              "url": "media/panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9_0_HS_0_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.07,
           "yaw": 176.05,
           "pitch": -2.24
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "id": "overlay_59868BDD_57E2_CDAD_41CD_C92AB86934FF",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73, this.camera_58AC44C1_57E1_5B92_41C7_1B4C10DECCEC); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 35,
              "width": 34,
              "url": "media/panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.1,
           "yaw": -3.47,
           "pitch": -4.24
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 70,
              "width": 69,
              "url": "media/panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9_0_HS_1_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.1,
           "yaw": -3.47,
           "pitch": -4.24
          }
         ]
        }
       ]
      }
     ],
     "vfov": 180,
     "hfovMax": 120,
     "partial": false,
     "adjacentPanoramas": [
      {
       "backwardYaw": 151.92,
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMin": 60,
        "id": "panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_t.jpg",
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "id": "overlay_5AD16B09_57E7_CE95_41D4_B6B957A150A1",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9, this.camera_592484F8_57E1_5B72_41CB_34217B69259D); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 42,
                 "width": 39,
                 "url": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.97,
              "yaw": 151.92,
              "pitch": -7.58
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 84,
                 "width": 79,
                 "url": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_0_HS_0_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.97,
              "yaw": 151.92,
              "pitch": -7.58
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "id": "overlay_5A9BBB70_57E7_4D72_41D3_35175EF3FB6E",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369, this.camera_59391503_57E1_5A96_41C8_082B525FD10C); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 33,
                 "width": 36,
                 "url": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.33,
              "yaw": -34.92,
              "pitch": -9.86
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 67,
                 "width": 73,
                 "url": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_0_HS_1_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.33,
              "yaw": -34.92,
              "pitch": -9.86
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "id": "overlay_596263EB_57E2_FD96_41C1_10BE97C8165D",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B, this.camera_593EE50D_57E1_5A92_41CC_A6366EF8E7AA); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 47,
                 "width": 41,
                 "url": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.2,
              "yaw": -131.68,
              "pitch": -11.08
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 94,
                 "width": 83,
                 "url": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_0_HS_2_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.2,
              "yaw": -131.68,
              "pitch": -11.08
             }
            ]
           }
          ]
         }
        ],
        "vfov": 180,
        "hfovMax": 120,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": -3.47,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9",
          "yaw": 151.92,
          "distance": 1
         },
         {
          "backwardYaw": 139.01,
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMin": 60,
           "id": "panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_t.jpg",
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "id": "overlay_5ADA9FB0_57E1_C5F2_41D4_5C9936C2E8FA",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73, this.camera_5935351E_57E1_5AAE_41D2_6F5A0BF77710); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 37,
                    "width": 48,
                    "url": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.11,
                 "yaw": 139.01,
                 "pitch": -18.37
                }
               ],
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 74,
                    "width": 97,
                    "url": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_0_HS_0_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.11,
                 "yaw": 139.01,
                 "pitch": -18.37
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "id": "overlay_5923F2AE_57E2_DFEE_41B0_0A4A1EDF7D30",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C, this.camera_59494526_57E1_5A9E_41BB_F95603596E75); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 37,
                    "width": 34,
                    "url": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.12,
                 "yaw": 44.22,
                 "pitch": 0.16
                }
               ],
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 74,
                    "width": 69,
                    "url": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_0_HS_1_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.12,
                 "yaw": 44.22,
                 "pitch": 0.16
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "id": "overlay_59798FCD_57E3_4592_41D1_7721E38CE008",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982, this.camera_5942252D_57E1_5AED_41C4_A7EA11E4B02E); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 40,
                    "width": 36,
                    "url": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.4,
                 "yaw": -153.09,
                 "pitch": -4.39
                }
               ],
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 80,
                    "width": 73,
                    "url": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_0_HS_2_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.4,
                 "yaw": -153.09,
                 "pitch": -4.39
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "hfovMax": 120,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": -34.92,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73",
             "yaw": 139.01,
             "distance": 1
            },
            {
             "backwardYaw": -162.51,
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMin": 60,
              "id": "panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "id": "overlay_59AF576F_57EE_C56E_41D5_ADFAEFC86612",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369, this.camera_589F14A3_57E1_5B96_41C1_2E2D6FFEC3EF); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 35,
                       "width": 36,
                       "url": "media/panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.41,
                    "yaw": -162.51,
                    "pitch": -3.03
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 70,
                       "width": 73,
                       "url": "media/panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C_0_HS_0_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.41,
                    "yaw": -162.51,
                    "pitch": -3.03
                   }
                  ]
                 }
                ]
               }
              ],
              "vfov": 180,
              "hfovMax": 120,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": 44.22,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369",
                "yaw": -162.51,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C_t.jpg",
              "label": "IMG_3301",
              "pitch": 0
             },
             "yaw": 44.22,
             "distance": 1
            },
            {
             "backwardYaw": 39.51,
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMin": 60,
              "id": "panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "id": "overlay_59DEEE43_57EF_C696_41B0_851F43C8DCF4",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369, this.camera_589574B2_57E1_5BF6_41CE_B4F9BCA2F9F3); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 33,
                       "width": 33,
                       "url": "media/panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.81,
                    "yaw": 39.51,
                    "pitch": -3.18
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 67,
                       "width": 66,
                       "url": "media/panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982_0_HS_0_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.81,
                    "yaw": 39.51,
                    "pitch": -3.18
                   }
                  ]
                 }
                ]
               }
              ],
              "vfov": 180,
              "hfovMax": 120,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": -153.09,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369",
                "yaw": 39.51,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982_t.jpg",
              "label": "IMG_3302",
              "pitch": 0
             },
             "yaw": -153.09,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_t.jpg",
           "label": "IMG_3300",
           "pitch": 0
          },
          "yaw": -34.92,
          "distance": 1
         },
         {
          "backwardYaw": -132.13,
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMin": 60,
           "id": "panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B_t.jpg",
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "id": "overlay_59985CDB_57E1_4BB6_4180_02BA88E4D258",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73, this.camera_595A9535_57E1_5AF2_41BD_01E29117B7C0); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 37,
                    "width": 36,
                    "url": "media/panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.41,
                 "yaw": -132.13,
                 "pitch": -3.79
                }
               ],
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 74,
                    "width": 73,
                    "url": "media/panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B_0_HS_0_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.41,
                 "yaw": -132.13,
                 "pitch": -3.79
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "hfovMax": 120,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": -131.68,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73",
             "yaw": -132.13,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B_t.jpg",
           "label": "IMG_3305",
           "pitch": 0
          },
          "yaw": -131.68,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_t.jpg",
        "label": "IMG_3298",
        "pitch": 0
       },
       "yaw": -3.47,
       "distance": 1
      },
      {
       "backwardYaw": 148.73,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A",
       "yaw": 176.05,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9_t.jpg",
     "label": "IMG_3304",
     "pitch": 0
    },
    "yaw": 148.73,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A_t.jpg",
  "label": "IMG_3303",
  "pitch": 0
 },
 {
  "buttonZoomIn": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
   "mode": "push",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 32,
   "minWidth": 0,
   "height": 32,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_rollover.png"
  },
  "class": "PanoramaPlayer",
  "buttonPlayRight": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
   "mode": "push",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 40,
   "minWidth": 0,
   "height": 40,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_rollover.png"
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonPause": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
   "mode": "toggle",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 40,
   "minWidth": 0,
   "height": 40,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "buttonZoomOut": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
   "mode": "push",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 32,
   "minWidth": 0,
   "height": 32,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_rollover.png"
  },
  "buttonMoveLeft": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
   "mode": "push",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 32,
   "minWidth": 0,
   "height": 32,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_rollover.png"
  },
  "buttonMoveRight": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
   "mode": "push",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 32,
   "minWidth": 0,
   "height": 32,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_rollover.png"
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
   "mode": "push",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 40,
   "minWidth": 0,
   "height": 40,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_rollover.png"
  },
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "buttonMoveUp": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
   "mode": "push",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 32,
   "minWidth": 0,
   "height": 32,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_rollover.png"
  },
  "buttonMoveDown": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
   "mode": "push",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 32,
   "minWidth": 0,
   "height": 32,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_rollover.png"
  },
  "buttonRestart": {
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
   "mode": "push",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_pressed.png",
   "shadow": false,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76.png",
   "class": "IconButton",
   "borderRadius": 0,
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "borderSize": 0,
   "width": 40,
   "minWidth": 0,
   "height": 40,
   "cursor": "hand",
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_rollover.png"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A_camera"
 },
 "this.panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_camera"
 },
 "this.panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_camera"
 },
 "this.panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C_camera"
 },
 "this.panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982_camera"
 },
 "this.panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9_camera"
 },
 "this.panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B_camera"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A_camera",
    "media": "this.panorama_5DB7653D_57DE_BAF2_41B7_A3E0A3581D3A"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73_camera",
    "media": "this.panorama_5D8C9987_57DF_4D9E_41D3_52875325EF73"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369_camera",
    "media": "this.panorama_5D8C0D70_57DF_4572_41C6_1F0E101BE369"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C_camera",
    "media": "this.panorama_5D8C2144_57DF_5A92_41CF_87FC30F2875C"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982_camera",
    "media": "this.panorama_5D8C6542_57DF_5A96_41CC_D65B7B3E9982"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9_camera",
    "media": "this.panorama_5D8CF928_57DF_4A93_41BD_C21467128DC9"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "camera": "this.panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B_camera",
    "media": "this.panorama_5D8C2D20_57DF_4A92_41D5_AAFF0A95AA4B"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -135.78,
   "pitch": 0
  },
  "id": "camera_589F14A3_57E1_5B96_41C1_2E2D6FFEC3EF"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 26.91,
   "pitch": 0
  },
  "id": "camera_589574B2_57E1_5BF6_41CE_B4F9BCA2F9F3"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -28.08,
   "pitch": 0
  },
  "id": "camera_58AC44C1_57E1_5B92_41C7_1B4C10DECCEC"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -31.27,
   "pitch": 0
  },
  "id": "camera_58B924D0_57E1_5BB2_418D_ED557798FB6B"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.53,
   "pitch": 0
  },
  "id": "camera_592484F8_57E1_5B72_41CB_34217B69259D"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -40.99,
   "pitch": 0
  },
  "id": "camera_59391503_57E1_5A96_41C8_082B525FD10C"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 47.87,
   "pitch": 0
  },
  "id": "camera_593EE50D_57E1_5A92_41CC_A6366EF8E7AA"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.95,
   "pitch": 0
  },
  "id": "camera_59324516_57E1_5ABE_41B2_84DDFF171D44"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.08,
   "pitch": 0
  },
  "id": "camera_5935351E_57E1_5AAE_41D2_6F5A0BF77710"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.49,
   "pitch": 0
  },
  "id": "camera_59494526_57E1_5A9E_41BB_F95603596E75"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.49,
   "pitch": 0
  },
  "id": "camera_5942252D_57E1_5AED_41C4_A7EA11E4B02E"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 48.32,
   "pitch": 0
  },
  "id": "camera_595A9535_57E1_5AF2_41BD_01E29117B7C0"
 }
], "children": [
 {
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 10,
  "toolTipShadowColor": "#333333",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontStyle": "normal",
  "playbackBarHeight": 20,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipFontFamily": "Arial",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarHeadHeight": 30,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "minHeight": 50,
  "playbackBarProgressBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "paddingTop": 0,
  "borderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "minWidth": 100,
  "height": "100%",
  "playbackBarOpacity": 1,
  "width": "100%",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarRight": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderRadius": 3,
  "toolTipPaddingLeft": 6,
  "paddingBottom": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontColor": "#606060",
  "toolTipTextShadowColor": "#000000",
  "top": 0,
  "toolTipShadowBlurRadius": 3,
  "id": "MainViewer",
  "progressBarOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipBorderSize": 1,
  "playbackBarHeadBorderRadius": 0,
  "progressHeight": 20,
  "toolTipPaddingTop": 4,
  "shadow": false,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "progressLeft": 10,
  "progressBottom": 1,
  "progressBarBorderRadius": 4,
  "class": "ViewerArea",
  "borderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "progressBorderSize": 2,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "transitionMode": "blending",
  "paddingLeft": 0,
  "playbackBarBottom": 10,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 12,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarBorderSize": 2,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingRight": 6,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "left": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBorderColor": "#AAAAAA"
 },
 {
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "bottom": "0%",
  "gap": 10,
  "shadow": false,
  "class": "Container",
  "borderRadius": 0,
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "id": "Container_5645B517_5EBA_61DA_41CE_5170204AEC9E",
    "gap": 4,
    "shadow": false,
    "class": "Container",
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "children": [
     "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
     "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
     "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
     "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
     {
      "layout": "vertical",
      "backgroundOpacity": 0,
      "id": "Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
      "gap": 4,
      "shadow": false,
      "class": "Container",
      "borderRadius": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
       "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
       "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44"
      ],
      "minHeight": 20,
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "paddingTop": 0,
      "borderSize": 0,
      "width": 40,
      "minWidth": 20,
      "scrollBarMargin": 2,
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "contentOpaque": false,
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "scrollBarWidth": 10
     },
     "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
     "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
     {
      "backgroundOpacity": 0,
      "id": "IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
      "mode": "toggle",
      "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5_pressed.png",
      "shadow": false,
      "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5.png",
      "class": "IconButton",
      "borderRadius": 0,
      "transparencyActive": true,
      "minHeight": 0,
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "paddingTop": 0,
      "borderSize": 0,
      "width": 40,
      "minWidth": 0,
      "height": 40,
      "cursor": "hand",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "paddingRight": 0
     },
     "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA"
    ],
    "minHeight": 20,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "borderSize": 0,
    "width": 360,
    "minWidth": 360,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "overflow": "hidden",
    "contentOpaque": false,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "96.479%",
    "scrollBarWidth": 10
   }
  ],
  "minHeight": 1,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "borderSize": 0,
  "width": "100%",
  "minWidth": 1,
  "height": 142,
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingRight": 0,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "scrollBarWidth": 10
 }
], 
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "layout": "absolute",
 "shadow": false,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getKey": function(key){  return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); }
 },
 "minHeight": 20,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "borderSize": 0,
 "width": "100%",
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "height": "100%",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10
})