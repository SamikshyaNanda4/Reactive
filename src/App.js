import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 
// nester structures

/*
*Header
       -Logo
       -Navbar
*Body  
       -Search
       -Retaurant Container
              -Restaurant Card
                     -image
                     -nameOfRestaurant
                     -rating Stars
                     -cuisine
                     -costForTwo
*Footer 
       -Copyright
       -Links
       -Social Media Links
       -Contact Us

*/




const resList2={
  "statusCode": 0,
  "data": {
    "tid": "334f5ce0-2b10-4c92-9931-2af26f58694d",
    "sid": "etw90e6a-f3c3-4069-a178-d277f8ba63fe",
    "success": {
      "cards": [
        {
          "relevance": {

          },
          "gridWidget": {
            "header": {
              "action": {

              },
              "headerStyling": {
                "padding": {

                }
              }
            },
            "layout": {
              "rows": 1,
              "columns": 3,
              "itemSpacing": 10,
              "widgetPadding": {

              },
              "containerStyle": {
                "containerPadding": {
                  "left": 12,
                  "top": 16,
                  "right": 12,
                  "bottom": 12
                }
              },
              "scrollBar": {
                "scrollStyling": {
                  "padding": {

                  }
                }
              },
              "autoScrollConfig": {

              },
              "separatorConfig": {

              }
            },
            "imageGridCards": {
              "info": [
                {
                  "id": "410097",
                  "imageId": "rng/md/carousel/production/cxde8vxsoywq2hxnhljd",
                  "action": {
                    "link": "swiggy://restaurantList",
                    "text": "Restaurant",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "RESTAURANT",
                    "altTextCta": "Click to know more about Restaurants."
                  }
                },
                {
                  "id": "409959",
                  "imageId": "rng/md/carousel/production/iudaqlpxqyigjgrlmtho",
                  "action": {
                    "link": "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                    "text": "Night",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "INSTAMART",
                    "altTextCta": "Click to know more about Instamart."
                  }
                },
                {
                  "id": "1696042",
                  "imageId": "rng/md/carousel/production/8aedd81fc69a9e57e7748ac2649618d7",
                  "action": {
                    "link": "swiggy://stores/go",
                    "text": "Genie",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "GENIE",
                    "altTextCta": "Click to know more about Restaurants."
                  }
                }
              ],
              "style": {
                "width": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.33,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                },
                "height": {
                  "type": "TYPE_RELATIVE",
                  "value": 1.3394495,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                }
              }
            },
            "id": "ScrollNavTrichicletP2_latebinding",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                "info": [
                  {
                    "id": "410097",
                    "imageId": "rng/md/carousel/production/cxde8vxsoywq2hxnhljd",
                    "action": {
                      "link": "swiggy://restaurantList",
                      "text": "Restaurant",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "RESTAURANT",
                      "altTextCta": "Click to know more about Restaurants."
                    },
                    "entityId": "swiggy://restaurantList",
                    "frequencyCapping": {

                    },
                    "externalMarketing": {

                    },
                    "description": "Restaurant"
                  },
                  {
                    "id": "409959",
                    "imageId": "rng/md/carousel/production/iudaqlpxqyigjgrlmtho",
                    "action": {
                      "link": "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                      "text": "Night",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "INSTAMART",
                      "altTextCta": "Click to know more about Instamart."
                    },
                    "entityId": "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                    "frequencyCapping": {

                    },
                    "externalMarketing": {

                    },
                    "description": "Night"
                  },
                  {
                    "id": "1696042",
                    "imageId": "rng/md/carousel/production/8aedd81fc69a9e57e7748ac2649618d7",
                    "action": {
                      "link": "swiggy://stores/go",
                      "text": "Genie",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "GENIE",
                      "altTextCta": "Click to know more about Restaurants."
                    },
                    "entityId": "swiggy://stores/go",
                    "frequencyCapping": {

                    },
                    "externalMarketing": {

                    },
                    "description": "Genie"
                  }
                ],
                "style": {
                  "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.33,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                  },
                  "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 1.3394495,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                  }
                }
              }
            },
            "footer": {
              "labelWrapper": {

              }
            }
          }
        },
        {
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN"
          },
          "gridWidget": {
            "header": {
              "title": "Top Picks For You",
              "action": {

              },
              "imageId": "sl9oogwe7n5dusolt5xe",
              "headerStyling": {
                "padding": {
                  "left": 16,
                  "top": 15,
                  "bottom": 24
                }
              }
            },
            "layout": {
              "rows": 1,
              "columns": 16,
              "horizontalScrollEnabled": true,
              "shouldSnap": true,
              "itemSpacing": 12,
              "widgetPadding": {

              },
              "containerStyle": {
                "containerPadding": {
                  "left": 16,
                  "right": 16,
                  "bottom": 12
                }
              },
              "scrollBar": {
                "scrollStyling": {
                  "padding": {

                  }
                }
              },
              "autoScrollConfig": {

              },
              "separatorConfig": {

              }
            },
            "imageGridCards": {
              "style": {
                "width": {

                },
                "height": {

                }
              }
            },
            "id": "Updated_4_favourites_SimRestoRelevance",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                "restaurants": [
                  {
                    "info": {
                      "id": "350427",
                      "name": "Sangam Sweets",
                      "cloudinaryImageId": "jbzf3zuayiwthyynulyy",
                      "locality": "2nd Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "Sweets"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "805",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "promoted": true,
                      "adTrackingId": "cid=15107352~p=0~adgrpid=15107352#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=350427~eid=09e31469-7a28-4308-9d6b-877d0a9342ba~srvts=1720364630281~collid=45995",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=350427",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10575",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Richmond Town",
                      "areaName": "Shanti Nagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-08 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹189"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=10575",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "788303",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                      "locality": "Near Shanti Nagar Bus Stop",
                      "areaName": "Shantinagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "1776",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=788303",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "465844",
                      "name": "Five Star Chicken",
                      "cloudinaryImageId": "n0c55jdcvi83pun9vxjd",
                      "locality": "Shantinagar",
                      "areaName": "Wilson Garden",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Snacks",
                        "Fast Food",
                        "Street Food"
                      ],
                      "avgRating": 4.1,
                      "parentId": "376",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=465844",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "79429",
                      "name": "Chinese Food Co.",
                      "cloudinaryImageId": "wcfndmduewx3toowxjjm",
                      "locality": "Sobha mall",
                      "areaName": "Yelahanka",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Chinese"
                      ],
                      "avgRating": 3.9,
                      "parentId": "484528",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "1K+",
                      "promoted": true,
                      "adTrackingId": "cid=15110131~p=1~adgrpid=15110131#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=79429~eid=1f9f4a4a-b26d-47aa-a801-aff3ba9a291e~srvts=1720364630281~collid=45995",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-08 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  "description": "OnlyOnSwiggy"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=79429",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "352791",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "gjcslopkyvnsc1gjjguq",
                      "locality": "8th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "12175",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "EVERY ITEM",
                        "subHeader": "@ ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=352791",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "12808",
                      "name": "A2B - Adyar Ananda Bhavan",
                      "cloudinaryImageId": "pdod4o1em9potwsd22rs",
                      "locality": "Wilson Garden",
                      "areaName": "Shanti Nagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Sweets",
                        "Chinese"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "22",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Mithai.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                }
                              },
                              {
                                "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                                  "description": "Delivery!"
                                }
                              },
                              {
                                "attributes": {
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  "description": "OnlyOnSwiggy"
                                }
                              },
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=12808",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "432976",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG",
                      "locality": "Double Road",
                      "areaName": "Shanti Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=432976",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "878275",
                      "name": "Lo! - Low Carb and Keto Foods",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/4/3870ab11-e437-471d-951a-283b08741e1e_878275.jpg",
                      "locality": "Lalbagh Road",
                      "areaName": "AUSTIN TOWN",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Continental",
                        "Healthy Food",
                        "North Indian",
                        "Biryani"
                      ],
                      "avgRating": 4.6,
                      "parentId": "8282",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "20+",
                      "promoted": true,
                      "adTrackingId": "cid=15108311~p=2~adgrpid=15108311#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=878275~eid=54805d5e-672c-48c8-bd13-8dff78c095b2~srvts=1720364630281~collid=45995",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-08 00:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=878275",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23846",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
                      "locality": "Rehinus Street",
                      "areaName": "Richmond Town",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2456",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-08 02:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=23846",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "69876",
                      "name": "Subway",
                      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
                      "locality": "UB City",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                                  "description": "Delivery!"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=69876",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "132622",
                      "name": "Marwadi Chaat & Tiffin Services Shanti nagar",
                      "cloudinaryImageId": "e8f48a82caf1cdc428448f64dba7b61e",
                      "locality": "Shanti Nagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Rajasthani",
                        "North Indian",
                        "Snacks",
                        "Chaat"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "parentId": "20091",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-14 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.6",
                          "ratingCount": "100+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=132622",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "767243",
                      "name": "Asha Sweet Center - Since 1951",
                      "cloudinaryImageId": "6d990316fc359969f8fe3e77290ff2a3",
                      "locality": "Shanthinagar",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Sweets",
                        "Bakery"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "472555",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "50+",
                      "promoted": true,
                      "adTrackingId": "cid=15108022~p=3~adgrpid=15108022#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=767243~eid=23ea01b3-ef05-40ce-9ecd-5064a0500728~srvts=1720364630281~collid=45995",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=767243",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "719639",
                      "name": "New Udupi Upahar",
                      "cloudinaryImageId": "b14cd9fc40129fcfb97aa7e621719d07",
                      "locality": "Shivashankar Plaza",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Tandoor",
                        "Chaat",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "14579",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=719639",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "741350",
                      "name": "Murugan Cafe",
                      "cloudinaryImageId": "b8672fe52944c3599ea324d99d608300",
                      "locality": "Kh Road",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "142103",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=741350",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "85320",
                      "name": "By 2 Coffee",
                      "cloudinaryImageId": "pzyccoxkjhlvwtiv5hsq",
                      "locality": "Chamrajpet",
                      "areaName": "Chamarajpet",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "172",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 21:35:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=85320",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  }
                ],
                "theme": "RESTAURANT_GROUP_FAVOURITE_THEME",
                "widgetType": "WIDGET_TYPE_FAVOURITES",
                "style": {

                },
                "collectionId": "45995"
              }
            },
            "footer": {
              "labelWrapper": {

              }
            }
          }
        },
        {
          "relevance": {

          },
          "gridWidget": {
            "header": {
              "title": "Offers For You",
              "action": {

              },
              "headerStyling": {
                "padding": {
                  "left": 16,
                  "top": 24,
                  "bottom": 24
                }
              }
            },
            "layout": {
              "rows": 1,
              "columns": 5,
              "horizontalScrollEnabled": true,
              "itemSpacing": 4,
              "widgetPadding": {
                "top": 8
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 16,
                  "bottom": 24
                }
              },
              "scrollBar": {
                "scrollStyling": {
                  "padding": {

                  }
                }
              },
              "autoScrollConfig": {

              },
              "separatorConfig": {

              }
            },
            "imageGridCards": {
              "info": [
                {
                  "id": "410105",
                  "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                  "action": {
                    "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                    "text": "DEAL60",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "DEAL60",
                    "altTextCta": "Tap to grab best deals from best restaurant"
                  }
                },
                {
                  "id": "410104",
                  "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                  "action": {
                    "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                    "text": "TRYNEW",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "TRYNEW",
                    "altTextCta": "explore Unique tastes from new eateries"
                  }
                },
                {
                  "id": "410121",
                  "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                  "action": {
                    "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                    "text": "TRYNEW",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "SWIGGYIT",
                    "altTextCta": "Offers for 1 Upto 50% off"
                  }
                },
                {
                  "id": "410109",
                  "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                  "action": {
                    "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                    "text": "JUBO",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "JUMBO",
                    "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                  }
                },
                {
                  "id": "410114",
                  "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                  "action": {
                    "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                    "text": "PARTY",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "PARTY",
                    "altTextCta": "Party Steals upto 300/- off"
                  }
                }
              ],
              "style": {
                "width": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.35714287,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                },
                "height": {
                  "type": "TYPE_RELATIVE",
                  "value": 1.1916667,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                }
              }
            },
            "id": "Home_P2_Food_Offerwidget_MainComponent_Scrollcards",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                "info": [
                  {
                    "id": "410105",
                    "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                      "text": "DEAL60",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "DEAL60",
                      "altTextCta": "Tap to grab best deals from best restaurant"
                    },
                    "entityId": "54793",
                    "frequencyCapping": {

                    },
                    "externalMarketing": {

                    },
                    "description": "DEAL60"
                  },
                  {
                    "id": "410104",
                    "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                      "text": "TRYNEW",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "TRYNEW",
                      "altTextCta": "explore Unique tastes from new eateries"
                    },
                    "entityId": "54802",
                    "frequencyCapping": {

                    },
                    "externalMarketing": {

                    },
                    "description": "TRYNEW"
                  },
                  {
                    "id": "410121",
                    "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                      "text": "TRYNEW",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "SWIGGYIT",
                      "altTextCta": "Offers for 1 Upto 50% off"
                    },
                    "entityId": "54908",
                    "frequencyCapping": {

                    },
                    "externalMarketing": {

                    },
                    "description": "TRYNEW"
                  },
                  {
                    "id": "410109",
                    "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                      "text": "JUBO",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "JUMBO",
                      "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                    },
                    "entityId": "54797",
                    "frequencyCapping": {

                    },
                    "externalMarketing": {

                    },
                    "description": "JUBO"
                  },
                  {
                    "id": "410114",
                    "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                    "action": {
                      "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                      "text": "PARTY",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      "altText": "PARTY",
                      "altTextCta": "Party Steals upto 300/- off"
                    },
                    "entityId": "50880",
                    "frequencyCapping": {

                    },
                    "externalMarketing": {

                    },
                    "description": "PARTY"
                  }
                ],
                "style": {
                  "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.35714287,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                  },
                  "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 1.1916667,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                  }
                }
              }
            },
            "footer": {
              "labelWrapper": {

              }
            }
          }
        },
        {
          "relevance": {

          },
          "gridWidget": {
            "header": {
              "title": "All Restaurants Nearby",
              "subtitle": "Discover unique tastes near you",
              "action": {

              },
              "imageId": "rng/md/production/ipai4xhkoy9ovshdnyn6",
              "headerStyling": {
                "padding": {
                  "left": 16,
                  "top": 24,
                  "bottom": 24
                }
              }
            },
            "layout": {
              "rows": 25,
              "columns": 1,
              "lineSpacing": 24,
              "widgetPadding": {

              },
              "containerStyle": {
                "containerPadding": {
                  "right": 12,
                  "bottom": 8
                }
              },
              "scrollBar": {
                "scrollStyling": {
                  "padding": {

                  }
                }
              },
              "autoScrollConfig": {

              },
              "separatorConfig": {

              }
            },
            "imageGridCards": {
              "style": {
                "width": {

                },
                "height": {

                }
              }
            },
            "id": "restaurantCollectionDeliveringNowTheme",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantInfoWithStyle",
                "restaurants": [
                  {
                    "info": {
                      "id": "350427",
                      "name": "Sangam Sweets",
                      "cloudinaryImageId": "jbzf3zuayiwthyynulyy",
                      "locality": "2nd Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "Sweets"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "805",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "promoted": true,
                      "adTrackingId": "cid=15107352~p=0~adgrpid=15107352#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=350427~eid=1c287488-ad76-403a-a4b4-51e2ec7a9989~srvts=1720364630251~collid=45826",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=350427",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10575",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Richmond Town",
                      "areaName": "Shanti Nagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-08 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          },
                          "imageBased": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹189"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=10575",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "788303",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                      "locality": "Near Shanti Nagar Bus Stop",
                      "areaName": "Shantinagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "1776",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=788303",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "79429",
                      "name": "Chinese Food Co.",
                      "cloudinaryImageId": "wcfndmduewx3toowxjjm",
                      "locality": "Sobha mall",
                      "areaName": "Yelahanka",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Chinese"
                      ],
                      "avgRating": 3.9,
                      "parentId": "484528",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "1K+",
                      "promoted": true,
                      "adTrackingId": "cid=15110131~p=1~adgrpid=15110131#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=79429~eid=92725a2a-e0f0-48a6-b70e-2efadc3e1550~srvts=1720364630251~collid=45826",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-08 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=79429",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "465844",
                      "name": "Five Star Chicken",
                      "cloudinaryImageId": "n0c55jdcvi83pun9vxjd",
                      "locality": "Shantinagar",
                      "areaName": "Wilson Garden",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Snacks",
                        "Fast Food",
                        "Street Food"
                      ],
                      "avgRating": 4.1,
                      "parentId": "376",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=465844",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "352791",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "gjcslopkyvnsc1gjjguq",
                      "locality": "8th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "12175",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "EVERY ITEM",
                        "subHeader": "@ ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=352791",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "878275",
                      "name": "Lo! - Low Carb and Keto Foods",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/4/3870ab11-e437-471d-951a-283b08741e1e_878275.jpg",
                      "locality": "Lalbagh Road",
                      "areaName": "AUSTIN TOWN",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Continental",
                        "Healthy Food",
                        "North Indian",
                        "Biryani"
                      ],
                      "avgRating": 4.6,
                      "parentId": "8282",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "20+",
                      "promoted": true,
                      "adTrackingId": "cid=15108311~p=2~adgrpid=15108311#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=878275~eid=6f704c76-6881-488e-a457-f85b9988769d~srvts=1720364630251~collid=45826",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-08 00:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=878275",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "12808",
                      "name": "Ananda Bhavan",
                      "cloudinaryImageId": "pdod4o1em9potwsd22rs",
                      "locality": "Wilson Garden",
                      "areaName": "Shanti Nagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Sweets",
                        "Chinese"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "22",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Mithai.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                  "description": "Delivery!"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=12808",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "432976",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG",
                      "locality": "Double Road",
                      "areaName": "Shanti Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=432976",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "767243",
                      "name": "Asha Sweet Center - Since 1951",
                      "cloudinaryImageId": "6d990316fc359969f8fe3e77290ff2a3",
                      "locality": "Shanthinagar",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Sweets",
                        "Bakery"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "472555",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "50+",
                      "promoted": true,
                      "adTrackingId": "cid=15108022~p=3~adgrpid=15108022#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=767243~eid=57da081e-12b9-4e8c-a611-2cb74ca30977~srvts=1720364630251~collid=45826",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=767243",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23846",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
                      "locality": "Rehinus Street",
                      "areaName": "Richmond Town",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2456",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-08 02:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=23846",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "69876",
                      "name": "Subway",
                      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
                      "locality": "UB City",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                                  "description": "Delivery!"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=69876",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "29673",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "on12tk5aqza0stxxsqhc",
                      "locality": "St. Marks Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "parentId": "2093",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "10K+",
                      "promoted": true,
                      "adTrackingId": "cid=14930131~p=4~adgrpid=14930131#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=29673~eid=68d0f2dd-e0fb-49b3-b952-93cbc7f266fd~srvts=1720364630251~collid=45826",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-08 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                                  "description": "Delivery!"
                                }
                              },
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹75 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=29673",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "427575",
                      "name": "Corner House Ice Cream",
                      "cloudinaryImageId": "buegmmozfa6tbzb9ehka",
                      "locality": "Basavanagudi",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "parentId": "65254",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                  "description": "Delivery!"
                                }
                              },
                              {
                                "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                                  "description": "Delivery!"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=427575",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "132622",
                      "name": "Marwadi Chaat & Tiffin Services Shanti nagar",
                      "cloudinaryImageId": "e8f48a82caf1cdc428448f64dba7b61e",
                      "locality": "Shanti Nagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Rajasthani",
                        "North Indian",
                        "Snacks",
                        "Chaat"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "parentId": "20091",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-14 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.6",
                          "ratingCount": "100+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=132622",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "615499",
                      "name": "Krishnam Veg",
                      "cloudinaryImageId": "kjim0tzroudoxttsljjp",
                      "locality": "Nanjappa Circle",
                      "areaName": "AUSTIN TOWN",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese",
                        "Indian",
                        "Desserts",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "367084",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "500+",
                      "promoted": true,
                      "adTrackingId": "cid=15107748~p=5~adgrpid=15107748#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=615499~eid=923c4f7f-9db5-4916-b114-81df25471b34~srvts=1720364630251~collid=45826",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=615499",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "719639",
                      "name": "New Udupi Upahar",
                      "cloudinaryImageId": "b14cd9fc40129fcfb97aa7e621719d07",
                      "locality": "Shivashankar Plaza",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Tandoor",
                        "Chaat",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "14579",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=719639",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "741350",
                      "name": "Murugan Cafe",
                      "cloudinaryImageId": "b8672fe52944c3599ea324d99d608300",
                      "locality": "Kh Road",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "142103",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=741350",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "6518",
                      "name": "Rolls Kitchen",
                      "cloudinaryImageId": "y7e8zdaagxrwxs3dnhnd",
                      "locality": "Longford Road",
                      "areaName": "Shanti Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Fast Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "781",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "promoted": true,
                      "adTrackingId": "cid=15106735~p=6~adgrpid=15106735#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=6518~eid=30e8bbe8-dca0-412b-ae86-ea0cce60b2dd~srvts=1720364630251~collid=45826",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": ""
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=6518",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "85320",
                      "name": "By 2 Coffee",
                      "cloudinaryImageId": "pzyccoxkjhlvwtiv5hsq",
                      "locality": "Chamrajpet",
                      "areaName": "Chamarajpet",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "172",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 21:35:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=85320",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "146397",
                      "name": "Sreeraj Lassi Bar 1973S",
                      "cloudinaryImageId": "b2d97facadf6b5a4e4f97e0124269768",
                      "locality": "Shantinagar",
                      "areaName": "Shantinagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Juices",
                        "Ice Cream Cakes",
                        "Snacks"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "418125",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1K+",
                      "promoted": true,
                      "adTrackingId": "cid=15110158~p=7~adgrpid=15110158#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=146397~eid=9644619f-ed33-4018-9b20-8a8f57b33c97~srvts=1720364630251~collid=45826",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "imageBased": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=146397",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "96527",
                      "name": "Vijayalakshmi",
                      "cloudinaryImageId": "r94u50lcikbaqulaofdi",
                      "locality": "Basavanagudi",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "20982",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=96527",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "56428",
                      "name": "Puliyogare Point",
                      "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
                      "locality": "Basavanagudi",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "8409",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=56428",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "688434",
                      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/dfea08dc-9227-4ce8-addb-72012b13f58d_688434.JPG",
                      "locality": "WEST PORTION",
                      "areaName": "Shanthinagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "582",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "50+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {

                          },
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=688434",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "78511",
                      "name": "NIC Ice Creams",
                      "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
                      "locality": "8th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "6249",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "Ratnesh_Badges/test2.png",
                            "shortDescription": "Perfect ice cream delivery",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "iconId": "Ratnesh_Badges/test2.png",
                                  "description": "",
                                  "shortDescription": "Perfect ice cream delivery",
                                  "fontColor": "#7E808C"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹169"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=78511",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  }
                ],
                "theme": "DELIVERING_NOW",
                "collectionId": "45826",
                "style": {

                }
              }
            },
            "footer": {
              "labelWrapper": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.Label",
                "text": "See all restaurants",
                "textColor": "#ffffff",
                "fontSize": 17,
                "fontName": "FONT_NAME_BOLD",
                "alignment": "ALIGNMENT_CENTER",
                "borderRadius": 6,
                "margin": {
                  "left": 16,
                  "top": 16,
                  "right": 16,
                  "bottom": 16
                },
                "padding": {
                  "top": 18,
                  "bottom": 18
                },
                "backgroundColor": "#e46d47",
                "cta": {
                  "link": "swiggy://restaurantList",
                  "text": "See all restaurants",
                  "type": "DEEPLINK"
                },
                "maxLines": 1
              }
            }
          }
        }
      ],
      "firstOffsetRequest": true,
      "cacheExpiryTime": {
        "value": 600
      },
      "nextFetch": 3
    },
    "requestId": "37788c67-f95f-4f05-9600-9eee1370e3e7"
  },
  "tid": "334f5ce0-2b10-4c92-9931-2af26f58694d",
  "sid": "etw90e6a-f3c3-4069-a178-d277f8ba63fe",
  "deviceId": "30a1f2bd-251e-e8aa-907c-750ede17559f",
  "csrfToken": "NadCOPIVlGLa-KyVzsMM47FBsl7GrY_r_0RA-tbM"
}

const  AppLayout=()=>{
  return(
      <div className="app">
      <Header/>
      <Body/>
      </div>
  )
}


    
// const head=React.createElement("h1", 
//     {id:"heading"}, 
//     "Hello World from Reactive!" ) 
//  {} is the place above where you give attibutes to you Tags
       const container= document.getElementById("root")
       const root=ReactDOM.createRoot(container);
//        root.render(head) 
       root.render(<AppLayout/>)

        