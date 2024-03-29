describe('MainController', function () {
    var $controller, MainController, Book;

    // Load ui.router and our MainCtrl module which we'll create next
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('MainCtrl'));
    beforeEach(angular.mock.module('BookService'));

    var bookList = [{
        "OLID:OL24364628M": {
            "publishers": [{
                "name": "S.H. Goetzel"
            }],
            "pagination": "368 p. ;",
            "identifiers": {
                "openlibrary": [
                    "OL24364628M"
                ]
            },
            "title": "Great expectations",
            "url": "https://openlibrary.org/books/OL24364628M/Great_expectations",
            "number_of_pages": 368,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/6995592-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/6995592-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/6995592-M.jpg"
            },
            "publish_date": "1863",
            "key": "/books/OL24364628M",
            "by_statement": "by Charles Dickens",
            "publish_places": [{
                "name": "Mobile"
            }],
            "ebooks": [{
                "formats": {
                    "pdf": {
                        "url": "https://archive.org/download/greatexpectatio00dick/greatexpectatio00dick.pdf"
                    },
                    "epub": {
                        "url": "https://archive.org/download/greatexpectatio00dick/greatexpectatio00dick.epub"
                    },
                    "text": {
                        "url": "https://archive.org/download/greatexpectatio00dick/greatexpectatio00dick_djvu.txt"
                    }
                },
                "preview_url": "https://archive.org/details/greatexpectatio00dick",
                "read_url": "https://archive.org/stream/greatexpectatio00dick",
                "availability": "full"
            }]
        },
        "OLID:OL24180216M": {
            "publishers": [{
                "name": "Macmillan"
            }],
            "pagination": "xxiv, 429 p.",
            "identifiers": {
                "lccn": [
                    "02022114"
                ],
                "openlibrary": [
                    "OL24180216M"
                ],
                "oclc": [
                    "3603319"
                ]
            },
            "classifications": {
                "lc_classifications": [
                    "PA4025.A5 B85 1900"
                ]
            },
            "links": [{
                "url": "http://en.wikipedia.org/wiki/Odyssey",
                "title": "Wikipedia entry"
            }],
            "title": "The Odyssey of Homer",
            "url": "https://openlibrary.org/books/OL24180216M/The_Odyssey_of_Homer",
            "number_of_pages": 429,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7104104-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7104104-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7104104-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:belluno",
                    "name": "Belluno"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:italy",
                    "name": "Italy"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:troy_(extinct_city)",
                    "name": "Troy (Extinct city)"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:turkey",
                    "name": "Turkey"
                }
            ],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/great_books_of_the_western_world",
                    "name": "great_books_of_the_western_world"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_italian",
                    "name": "Translations into Italian"
                },
                {
                    "url": "https://openlibrary.org/subjects/odysseus_(greek_mythology)",
                    "name": "Odysseus (Greek mythology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/italian_language",
                    "name": "Italian language"
                },
                {
                    "url": "https://openlibrary.org/subjects/readers",
                    "name": "Readers"
                },
                {
                    "url": "https://openlibrary.org/subjects/dialects",
                    "name": "Dialects"
                },
                {
                    "url": "https://openlibrary.org/subjects/accessible_book",
                    "name": "Accessible book"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_ukrainian",
                    "name": "Translations into Ukrainian"
                },
                {
                    "url": "https://openlibrary.org/subjects/poetry",
                    "name": "Poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction",
                    "name": "Fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/classical_literature",
                    "name": "Classical literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/odiseo_(mitología_griega)",
                    "name": "Odiseo (Mitología griega)"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/overdrive",
                    "name": "OverDrive"
                },
                {
                    "url": "https://openlibrary.org/subjects/popular_print_disabled_books",
                    "name": "Popular Print Disabled Books"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_french",
                    "name": "Translations into French"
                },
                {
                    "url": "https://openlibrary.org/subjects/juvenile_literature",
                    "name": "Juvenile literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_in_to_english",
                    "name": "Translations in to English"
                },
                {
                    "url": "https://openlibrary.org/subjects/horses",
                    "name": "Horses"
                },
                {
                    "url": "https://openlibrary.org/subjects/trojan_war",
                    "name": "Trojan War"
                },
                {
                    "url": "https://openlibrary.org/subjects/mythology,_greek,_in_literature",
                    "name": "Mythology, Greek, in literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/achilles_(greek_mythology)",
                    "name": "Achilles (Greek mythology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/diseases",
                    "name": "Diseases"
                },
                {
                    "url": "https://openlibrary.org/subjects/traducciones_al_español",
                    "name": "Traducciones al español"
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_mythology",
                    "name": "Greek Mythology"
                },
                {
                    "url": "https://openlibrary.org/subjects/great_books",
                    "name": "great_books"
                },
                {
                    "url": "https://openlibrary.org/subjects/criticism_and_interpretation",
                    "name": "Criticism and interpretation"
                },
                {
                    "url": "https://openlibrary.org/subjects/odysseus_(greek_mythology)_in_literature",
                    "name": "Odysseus (Greek mythology) in literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/penelope_(greek_mythology)",
                    "name": "Penelope (Greek mythology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/literatura_grega_clássica",
                    "name": "Literatura grega clássica"
                },
                {
                    "url": "https://openlibrary.org/subjects/greeks",
                    "name": "Greeks"
                },
                {
                    "url": "https://openlibrary.org/subjects/classic_literature",
                    "name": "Classic Literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_german",
                    "name": "Translations into German"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_catalan",
                    "name": "Translations into Catalan"
                },
                {
                    "url": "https://openlibrary.org/subjects/homer",
                    "name": "Homer"
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_epic_poetry",
                    "name": "Greek Epic poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_armenian",
                    "name": "Translations into Armenian"
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_gods",
                    "name": "Greek Gods"
                },
                {
                    "url": "https://openlibrary.org/subjects/hymns,_greek_(classical)",
                    "name": "Hymns, Greek (Classical)"
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_poetry",
                    "name": "Greek poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/epic_poetry",
                    "name": "Epic poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_latin",
                    "name": "Translations into Latin"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_russian",
                    "name": "Translations into Russian"
                },
                {
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/literature_in_spanish",
                    "name": "Literature in Spanish"
                },
                {
                    "url": "https://openlibrary.org/subjects/calypso_(greek_mythology)",
                    "name": "Calypso (Greek mythology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_epic_poety",
                    "name": "Greek Epic poety"
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_language",
                    "name": "Greek language"
                },
                {
                    "url": "https://openlibrary.org/subjects/odysseus_(greekmythology)",
                    "name": "Odysseus (Greekmythology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_polish",
                    "name": "Translations into Polish"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_arabic",
                    "name": "Translations into Arabic"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_english",
                    "name": "Translations into English"
                },
                {
                    "url": "https://openlibrary.org/subjects/history_and_criticism",
                    "name": "History and criticism"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_spanish",
                    "name": "Translations into Spanish"
                },
                {
                    "url": "https://openlibrary.org/subjects/early_works_to_1800",
                    "name": "Early works to 1800"
                },
                {
                    "url": "https://openlibrary.org/subjects/poesía",
                    "name": "Poesía"
                },
                {
                    "url": "https://openlibrary.org/subjects/poesia_épica",
                    "name": "Poesia épica"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                },
                {
                    "url": "https://openlibrary.org/subjects/poesía_épica_griega",
                    "name": "Poesía épica griega"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_irish",
                    "name": "Translations into Irish"
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_literature",
                    "name": "Greek literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/long_now_manual_for_civilization",
                    "name": "Long Now Manual for Civilization"
                }
            ],
            "subject_people": [{
                    "url": "https://openlibrary.org/subjects/person:homer",
                    "name": "Homer"
                },
                {
                    "url": "https://openlibrary.org/subjects/person:odysseus_(greek_mythology)",
                    "name": "Odysseus (Greek mythology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/person:oskar_kokoschka_(1886-)",
                    "name": "Oskar Kokoschka (1886-)"
                }
            ],
            "key": "/books/OL24180216M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL6848355A/Homer",
                "name": "Homer"
            }],
            "publish_date": "1900",
            "by_statement": "done into English prose by S.H. Butcher, and A. Lang",
            "publish_places": [{
                "name": "London"
            }],
            "ebooks": [{
                "formats": {
                    "pdf": {
                        "url": "https://archive.org/download/cu31924026359129/cu31924026359129.pdf"
                    },
                    "epub": {
                        "url": "https://archive.org/download/cu31924026359129/cu31924026359129.epub"
                    },
                    "text": {
                        "url": "https://archive.org/download/cu31924026359129/cu31924026359129_djvu.txt"
                    }
                },
                "preview_url": "https://archive.org/details/cu31924026359129",
                "read_url": "https://archive.org/stream/cu31924026359129",
                "availability": "full"
            }]
        },
        "OLID:OL6732939M": {
            "publishers": [{
                "name": "Scribner"
            }],
            "pagination": "355 p. ;",
            "identifiers": {
                "lccn": [
                    "29020658"
                ],
                "openlibrary": [
                    "OL6732939M"
                ],
                "oclc": [
                    "3385032"
                ],
                "librarything": [
                    "3491"
                ]
            },
            "classifications": {
                "lc_classifications": [
                    "PZ3.H3736 Fa",
                    "PS3515.E37 Fa"
                ]
            },
            "title": "A farewell to arms",
            "url": "https://openlibrary.org/books/OL6732939M/A_farewell_to_arms",
            "number_of_pages": 355,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7144309-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7144309-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7144309-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:italy",
                    "name": "Italy"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:the_battle_of_caporetto",
                    "name": "The Battle of Caporetto"
                }
            ],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/cuentos_de_guerra",
                    "name": "Cuentos de guerra"
                },
                {
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/popular_print_disabled_books",
                    "name": "Popular Print Disabled Books"
                },
                {
                    "url": "https://openlibrary.org/subjects/world_war,_1914-1918",
                    "name": "World War, 1914-1918"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/accessible_book",
                    "name": "Accessible book"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction_in_english",
                    "name": "Fiction in English"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction",
                    "name": "Fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/campaigns",
                    "name": "Campaigns"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_syllabus_project",
                    "name": "open_syllabus_project"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                },
                {
                    "url": "https://openlibrary.org/subjects/large_type_books",
                    "name": "Large type books"
                },
                {
                    "url": "https://openlibrary.org/subjects/american_fiction",
                    "name": "American fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/guerra_mundial_i,_1914-1918",
                    "name": "Guerra Mundial I, 1914-1918"
                },
                {
                    "url": "https://openlibrary.org/subjects/ficción",
                    "name": "Ficción"
                },
                {
                    "url": "https://openlibrary.org/subjects/1914-1918_world_war",
                    "name": "1914-1918 World War"
                },
                {
                    "url": "https://openlibrary.org/subjects/internet_archive_wishlist",
                    "name": "Internet Archive Wishlist"
                }
            ],
            "subject_people": [{
                "url": "https://openlibrary.org/subjects/person:john_c._schweitzer",
                "name": "John C. Schweitzer"
            }],
            "key": "/books/OL6732939M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL13640A/Ernest_Hemingway",
                "name": "Ernest Hemingway"
            }],
            "publish_date": "1929",
            "by_statement": "Ernest Hemingway.",
            "publish_places": [{
                "name": "New York"
            }],
            "subject_times": [{
                "url": "https://openlibrary.org/subjects/time:20th_century",
                "name": "20th century"
            }],
            "ebooks": [{
                "formats": {
                    "pdf": {
                        "url": "https://archive.org/download/farewelltoarms01hemi/farewelltoarms01hemi.pdf"
                    },
                    "epub": {
                        "url": "https://archive.org/download/farewelltoarms01hemi/farewelltoarms01hemi.epub"
                    },
                    "text": {
                        "url": "https://archive.org/download/farewelltoarms01hemi/farewelltoarms01hemi_djvu.txt"
                    }
                },
                "preview_url": "https://archive.org/details/farewelltoarms01hemi",
                "read_url": "https://archive.org/stream/farewelltoarms01hemi",
                "availability": "full"
            }]
        },
        "OLID:OL30460M": {
            "publishers": [{
                "name": "Bethany House"
            }],
            "pagination": "285 p. ;",
            "identifiers": {
                "lccn": [
                    "99006884"
                ],
                "openlibrary": [
                    "OL30460M"
                ],
                "isbn_10": [
                    "0764221140"
                ],
                "librarything": [
                    "1982257"
                ],
                "goodreads": [
                    "442109"
                ]
            },
            "classifications": {
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "lc_classifications": [
                    "PS3566.E7717 V45 2000"
                ]
            },
            "title": "A veiled reflection",
            "url": "https://openlibrary.org/books/OL30460M/A_veiled_reflection",
            "number_of_pages": 285,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/1438659-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/1438659-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/1438659-M.jpg"
            },
            "subject_places": [{
                "url": "https://openlibrary.org/subjects/place:arizona",
                "name": "Arizona"
            }],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/popular_print_disabled_books",
                    "name": "Popular Print Disabled Books"
                },
                {
                    "url": "https://openlibrary.org/subjects/impostors_and_imposture",
                    "name": "Impostors and imposture"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/accessible_book",
                    "name": "Accessible book"
                },
                {
                    "url": "https://openlibrary.org/subjects/waitresses",
                    "name": "Waitresses"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction",
                    "name": "Fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/twins",
                    "name": "Twins"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                },
                {
                    "url": "https://openlibrary.org/subjects/women_pioneers",
                    "name": "Women pioneers"
                }
            ],
            "publish_date": "2000",
            "key": "/books/OL30460M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL18777A/Tracie_Peterson",
                "name": "Tracie Peterson"
            }],
            "by_statement": "Tracie Peterson.",
            "publish_places": [{
                "name": "Minneapolis, Minn"
            }],
            "ebooks": [{
                "checkedout": false,
                "formats": {},
                "preview_url": "https://archive.org/details/veiledreflection00pete",
                "borrow_url": "https://openlibrary.org/books/OL30460M/A_veiled_reflection/borrow",
                "availability": "borrow"
            }]
        },
        "OLID:OL24948637M": {
            "publishers": [{
                "name": "Jove Publications"
            }],
            "pagination": "x, 303 p.",
            "identifiers": {
                "isbn_13": [
                    "9780515054132"
                ],
                "openlibrary": [
                    "OL24948637M"
                ],
                "isbn_10": [
                    "0515054135"
                ],
                "oclc": [
                    "6028059"
                ]
            },
            "classifications": {
                "lc_classifications": [
                    "PR9639.3.M27 D45 1980"
                ]
            },
            "title": "Death of a Peer",
            "url": "https://openlibrary.org/books/OL24948637M/Death_of_a_Peer",
            "number_of_pages": 303,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/6972261-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/6972261-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/6972261-M.jpg"
            },
            "subject_places": [{
                "url": "https://openlibrary.org/subjects/place:england",
                "name": "England"
            }],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/detective_and_mystery_stories",
                    "name": "Detective and mystery stories"
                },
                {
                    "url": "https://openlibrary.org/subjects/police",
                    "name": "Police"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/juvenile_fiction",
                    "name": "Juvenile fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction",
                    "name": "Fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                },
                {
                    "url": "https://openlibrary.org/subjects/popular_print_disabled_books",
                    "name": "Popular Print Disabled Books"
                },
                {
                    "url": "https://openlibrary.org/subjects/accessible_book",
                    "name": "Accessible book"
                },
                {
                    "url": "https://openlibrary.org/subjects/roderick_alleyn_(fictitious_character)",
                    "name": "Roderick Alleyn (Fictitious character)"
                }
            ],
            "subject_people": [{
                "url": "https://openlibrary.org/subjects/person:inspector_roderick_alleyn",
                "name": "Inspector Roderick Alleyn"
            }],
            "key": "/books/OL24948637M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL26952A/Ngaio_Marsh",
                "name": "Ngaio Marsh"
            }],
            "publish_date": "1980",
            "by_statement": "Ngaio Marsh",
            "publish_places": [{
                "name": "New York"
            }],
            "subject_times": [{
                "url": "https://openlibrary.org/subjects/time:written_in_1940.",
                "name": "Written in 1940."
            }],
            "ebooks": [{
                "checkedout": true,
                "formats": {},
                "preview_url": "https://archive.org/details/deathofpeer00mars",
                "borrow_url": "https://openlibrary.org/books/OL24948637M/Death_of_a_Peer/borrow",
                "availability": "borrow"
            }]
        },
        "OLID:OL1631378M": {
            "publishers": [{
                "name": "Penguin Books"
            }],
            "pagination": "xiii, 353 p. ;",
            "identifiers": {
                "lccn": [
                    "91180311"
                ],
                "openlibrary": [
                    "OL1631378M"
                ],
                "isbn_10": [
                    "0140444572"
                ],
                "goodreads": [
                    "43937"
                ],
                "librarything": [
                    "11862"
                ]
            },
            "classifications": {
                "dewey_decimal_class": [
                    "873/.01"
                ],
                "lc_classifications": [
                    "PA6807.A5 W47 1990"
                ]
            },
            "title": "The Aeneid",
            "url": "https://openlibrary.org/books/OL1631378M/The_Aeneid",
            "notes": "Translation of: Aeneis.",
            "number_of_pages": 353,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7886771-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7886771-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7886771-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:rome",
                    "name": "Rome"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:italy",
                    "name": "Italy"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:poetry",
                    "name": "Poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:naples",
                    "name": "Naples"
                }
            ],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/dido_(legendary_character)",
                    "name": "Dido (Legendary character)"
                },
                {
                    "url": "https://openlibrary.org/subjects/legends",
                    "name": "Legends"
                },
                {
                    "url": "https://openlibrary.org/subjects/readers",
                    "name": "Readers"
                },
                {
                    "url": "https://openlibrary.org/subjects/poetry",
                    "name": "Poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_syllabus_project",
                    "name": "open_syllabus_project"
                },
                {
                    "url": "https://openlibrary.org/subjects/latin_language",
                    "name": "Latin language"
                },
                {
                    "url": "https://openlibrary.org/subjects/illustrations",
                    "name": "Illustrations"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_french",
                    "name": "Translations into French"
                },
                {
                    "url": "https://openlibrary.org/subjects/phaedra_(greek_mythology)",
                    "name": "Phaedra (Greek mythology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/problems,_exercises",
                    "name": "Problems, exercises"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_italian",
                    "name": "Translations into Italian"
                },
                {
                    "url": "https://openlibrary.org/subjects/aeneas_(legendary_character)_in_literature",
                    "name": "Aeneas (Legendary character) in literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/trojan_war",
                    "name": "Trojan War"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_german",
                    "name": "Translations into German"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_hungarian",
                    "name": "Translations into Hungarian"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_spanish",
                    "name": "Translations into Spanish"
                },
                {
                    "url": "https://openlibrary.org/subjects/aeneas_(legendary_character)",
                    "name": "Aeneas (Legendary character)"
                },
                {
                    "url": "https://openlibrary.org/subjects/drama",
                    "name": "Drama"
                },
                {
                    "url": "https://openlibrary.org/subjects/rome",
                    "name": "Rome"
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_literature",
                    "name": "Greek literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_russian",
                    "name": "Translations into Russian"
                },
                {
                    "url": "https://openlibrary.org/subjects/italian_dialect_poetry",
                    "name": "Italian Dialect poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/history",
                    "name": "History"
                },
                {
                    "url": "https://openlibrary.org/subjects/concordances",
                    "name": "Concordances"
                },
                {
                    "url": "https://openlibrary.org/subjects/turnus_(legendary_character)",
                    "name": "Turnus (Legendary character)"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_polish",
                    "name": "Translations into Polish"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_arabic",
                    "name": "Translations into Arabic"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_english",
                    "name": "Translations into English"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_slovak",
                    "name": "Translations into Slovak"
                },
                {
                    "url": "https://openlibrary.org/subjects/examinations,_questions",
                    "name": "Examinations, questions"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_hebrew",
                    "name": "Translations into Hebrew"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_scots",
                    "name": "Translations into Scots"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                },
                {
                    "url": "https://openlibrary.org/subjects/latin_epic_poetry",
                    "name": "Latin Epic poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/epic_poetry",
                    "name": "Epic poetry"
                }
            ],
            "subject_people": [{
                "url": "https://openlibrary.org/subjects/person:virgil",
                "name": "Virgil"
            }],
            "key": "/books/OL1631378M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL28294A/Publius_Vergilius_Maro",
                "name": "Publius Vergilius Maro"
            }],
            "publish_date": "1990",
            "by_statement": "Virgil ; a new prose translation by David West.",
            "publish_places": [{
                    "name": "London, England"
                },
                {
                    "name": "New York, N.Y., USA"
                }
            ],
            "subject_times": [{
                "url": "https://openlibrary.org/subjects/time:1",
                "name": "1"
            }],
            "ebooks": [{
                "checkedout": true,
                "formats": {},
                "preview_url": "https://archive.org/details/aeneidvirg00virg",
                "borrow_url": "https://openlibrary.org/books/OL1631378M/The_Aeneid/borrow",
                "availability": "borrow"
            }]
        },
        "OLID:OL7101974M": {
            "publishers": [{
                "name": "Luzac"
            }],
            "pagination": "204p.",
            "subtitle": "the oldest military treatise in the world",
            "title": "The art of war",
            "url": "https://openlibrary.org/books/OL7101974M/The_art_of_war",
            "classifications": {
                "lc_classifications": [
                    "U101 S95 1910"
                ]
            },
            "identifiers": {
                "openlibrary": [
                    "OL7101974M"
                ]
            },
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7883930-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7883930-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7883930-M.jpg"
            },
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/early_works_to_1800",
                    "name": "Early works to 1800"
                },
                {
                    "url": "https://openlibrary.org/subjects/military_art_and_science",
                    "name": "Military art and science"
                },
                {
                    "url": "https://openlibrary.org/subjects/accessible_book",
                    "name": "Accessible book"
                },
                {
                    "url": "https://openlibrary.org/subjects/great_books_of_the_western_world",
                    "name": "great_books_of_the_western_world"
                }
            ],
            "publish_date": "1910",
            "key": "/books/OL7101974M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL2632419A/Sun_Tzu",
                "name": "Sun Tzu"
            }],
            "by_statement": "translated from the Chinese with introd. and critical notes by Lionel Giles.",
            "publish_places": [{
                "name": "London"
            }],
            "ebooks": [{
                "formats": {
                    "pdf": {
                        "url": "https://archive.org/download/artofwaroldestmi00suntuoft/artofwaroldestmi00suntuoft.pdf"
                    },
                    "epub": {
                        "url": "https://archive.org/download/artofwaroldestmi00suntuoft/artofwaroldestmi00suntuoft.epub"
                    },
                    "text": {
                        "url": "https://archive.org/download/artofwaroldestmi00suntuoft/artofwaroldestmi00suntuoft_djvu.txt"
                    }
                },
                "preview_url": "https://archive.org/details/artofwaroldestmi00suntuoft",
                "read_url": "https://archive.org/stream/artofwaroldestmi00suntuoft",
                "availability": "full"
            }]
        },
        "OLID:OL6990157M": {
            "publishers": [{
                "name": "American book company"
            }],
            "pagination": "287 p.",
            "identifiers": {
                "lccn": [
                    "07035637"
                ],
                "openlibrary": [
                    "OL6990157M"
                ],
                "oclc": [
                    "732715"
                ]
            },
            "classifications": {
                "lc_classifications": [
                    "E308.6.F7 A2 1907a"
                ]
            },
            "title": "The autobiography of Benjamin Franklin",
            "url": "https://openlibrary.org/books/OL6990157M/The_autobiography_of_Benjamin_Franklin",
            "notes": "At head of title: Gateway series.",
            "number_of_pages": 287,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7883945-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7883945-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7883945-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:united_states",
                    "name": "United States"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:pennsylvania",
                    "name": "Pennsylvania"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:philadelphia",
                    "name": "Philadelphia"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:france",
                    "name": "France"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:statesmen",
                    "name": "Statesmen"
                }
            ],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/wills",
                    "name": "Wills"
                },
                {
                    "url": "https://openlibrary.org/subjects/scientists",
                    "name": "Scientists"
                },
                {
                    "url": "https://openlibrary.org/subjects/printers",
                    "name": "Printers"
                },
                {
                    "url": "https://openlibrary.org/subjects/american_maxims",
                    "name": "American Maxims"
                },
                {
                    "url": "https://openlibrary.org/subjects/inventors",
                    "name": "Inventors"
                },
                {
                    "url": "https://openlibrary.org/subjects/correspondence",
                    "name": "Correspondence"
                },
                {
                    "url": "https://openlibrary.org/subjects/philosophers",
                    "name": "Philosophers"
                },
                {
                    "url": "https://openlibrary.org/subjects/accessible_book",
                    "name": "Accessible book"
                },
                {
                    "url": "https://openlibrary.org/subjects/politics_and_government",
                    "name": "Politics and government"
                },
                {
                    "url": "https://openlibrary.org/subjects/statesman",
                    "name": "Statesman"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/maxims",
                    "name": "Maxims"
                },
                {
                    "url": "https://openlibrary.org/subjects/will",
                    "name": "Will"
                },
                {
                    "url": "https://openlibrary.org/subjects/history",
                    "name": "History"
                },
                {
                    "url": "https://openlibrary.org/subjects/portraits",
                    "name": "Portraits"
                },
                {
                    "url": "https://openlibrary.org/subjects/sources",
                    "name": "Sources"
                },
                {
                    "url": "https://openlibrary.org/subjects/quakers",
                    "name": "Quakers"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                },
                {
                    "url": "https://openlibrary.org/subjects/education",
                    "name": "Education"
                },
                {
                    "url": "https://openlibrary.org/subjects/childhood_and_youth",
                    "name": "Childhood and youth"
                },
                {
                    "url": "https://openlibrary.org/subjects/biography",
                    "name": "Biography"
                },
                {
                    "url": "https://openlibrary.org/subjects/statesmen",
                    "name": "Statesmen"
                }
            ],
            "subject_people": [{
                    "url": "https://openlibrary.org/subjects/person:benjamin_franklin_(1706-1790)",
                    "name": "Benjamin Franklin (1706-1790)"
                },
                {
                    "url": "https://openlibrary.org/subjects/person:frank_woodworth_pine_(1869-)",
                    "name": "Frank Woodworth Pine (1869-)"
                },
                {
                    "url": "https://openlibrary.org/subjects/person:john_woolman_(1720-1772)",
                    "name": "John Woolman (1720-1772)"
                }
            ],
            "key": "/books/OL6990157M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL26170A/Benjamin_Franklin",
                "name": "Benjamin Franklin"
            }],
            "publish_date": "1907",
            "by_statement": "ed. by Albert Henry Smyth.",
            "publish_places": [{
                    "name": "New York"
                },
                {
                    "name": "Cincinnati [etc.]"
                }
            ],
            "subject_times": [{
                    "url": "https://openlibrary.org/subjects/time:revolution,_1789-1799",
                    "name": "Revolution, 1789-1799"
                },
                {
                    "url": "https://openlibrary.org/subjects/time:1775-1783",
                    "name": "1775-1783"
                },
                {
                    "url": "https://openlibrary.org/subjects/time:to_1775",
                    "name": "To 1775"
                },
                {
                    "url": "https://openlibrary.org/subjects/time:18th_century",
                    "name": "18th century"
                }
            ],
            "ebooks": [{
                "formats": {
                    "pdf": {
                        "url": "https://archive.org/download/autobiograp00fran/autobiograp00fran.pdf"
                    },
                    "epub": {
                        "url": "https://archive.org/download/autobiograp00fran/autobiograp00fran.epub"
                    },
                    "text": {
                        "url": "https://archive.org/download/autobiograp00fran/autobiograp00fran_djvu.txt"
                    }
                },
                "preview_url": "https://archive.org/details/autobiograp00fran",
                "read_url": "https://archive.org/stream/autobiograp00fran",
                "availability": "full"
            }]
        },
        "OLID:OL22895148M": {
            "publishers": [{
                "name": "A.L. Burt"
            }],
            "pagination": "548 p. :",
            "identifiers": {
                "openlibrary": [
                    "OL22895148M"
                ],
                "oclc": [
                    "11945341"
                ]
            },
            "links": [{
                "url": "http://en.wikipedia.org/wiki/Iliad",
                "title": "wikipedia"
            }],
            "title": "The Iliad of Homer",
            "url": "https://openlibrary.org/books/OL22895148M/The_Iliad_of_Homer",
            "number_of_pages": 548,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7883931-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7883931-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7883931-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:turkey",
                    "name": "Turkey"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:ilium",
                    "name": "Ilium"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:troy_(extinct_city)",
                    "name": "Troy (Extinct city)"
                }
            ],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/great_books_of_the_western_world",
                    "name": "great_books_of_the_western_world"
                },
                {
                    "url": "https://openlibrary.org/subjects/odysseus_(greek_mythology)",
                    "name": "Odysseus (Greek mythology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/criticism_and_interpretation",
                    "name": "Criticism and interpretation"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_ukrainian",
                    "name": "Translations into Ukrainian"
                },
                {
                    "url": "https://openlibrary.org/subjects/poesia_épica",
                    "name": "Poesia épica"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction",
                    "name": "Fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_french",
                    "name": "Translations into French"
                },
                {
                    "url": "https://openlibrary.org/subjects/textual_criticism",
                    "name": "Textual Criticism"
                },
                {
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In Library"
                },
                {
                    "url": "https://openlibrary.org/subjects/achilles_(greek_mythology)",
                    "name": "Achilles (Greek mythology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/homer.",
                    "name": "Homer."
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_mythology",
                    "name": "Greek Mythology"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_italian",
                    "name": "Translations into Italian"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations",
                    "name": "Translations"
                },
                {
                    "url": "https://openlibrary.org/subjects/trojan_war",
                    "name": "Trojan War"
                },
                {
                    "url": "https://openlibrary.org/subjects/greeks",
                    "name": "Greeks"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_german",
                    "name": "Translations into German"
                },
                {
                    "url": "https://openlibrary.org/subjects/greek_epic_poetry",
                    "name": "Greek Epic poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_spanish",
                    "name": "Translations into Spanish"
                },
                {
                    "url": "https://openlibrary.org/subjects/poetry",
                    "name": "Poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_latin",
                    "name": "Translations into Latin"
                },
                {
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_turkish",
                    "name": "Translations into Turkish"
                },
                {
                    "url": "https://openlibrary.org/subjects/translations_into_english",
                    "name": "Translations into English"
                },
                {
                    "url": "https://openlibrary.org/subjects/literatura_grega_clássica",
                    "name": "Literatura grega clássica"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                }
            ],
            "subject_people": [{
                    "url": "https://openlibrary.org/subjects/person:homer",
                    "name": "Homer"
                },
                {
                    "url": "https://openlibrary.org/subjects/person:ennis_rees",
                    "name": "Ennis Rees"
                },
                {
                    "url": "https://openlibrary.org/subjects/person:christian_gottlob_heyne_(1729-1812)",
                    "name": "Christian Gottlob Heyne (1729-1812)"
                },
                {
                    "url": "https://openlibrary.org/subjects/person:alexander_the_great_(358-323_bce)",
                    "name": "Alexander the Great (358-323 BCE)"
                },
                {
                    "url": "https://openlibrary.org/subjects/person:heinrich_schliemann_(1822-1890)",
                    "name": "Heinrich Schliemann (1822-1890)"
                }
            ],
            "key": "/books/OL22895148M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL6848355A/Homer",
                "name": "Homer"
            }],
            "publish_date": "1902",
            "by_statement": "translated by Alexander Pope ; with notes and intoduction by Theodore Alois Buckley.",
            "publish_places": [{
                "name": "New York"
            }],
            "subject_times": [{
                    "url": "https://openlibrary.org/subjects/time:bronze_age",
                    "name": "Bronze Age"
                },
                {
                    "url": "https://openlibrary.org/subjects/time:geometric_period_(c._900-700_bce)",
                    "name": "Geometric Period (c. 900-700 BCE)"
                }
            ],
            "ebooks": [{
                "formats": {
                    "pdf": {
                        "url": "https://archive.org/download/theiliadofhomer00home/theiliadofhomer00home.pdf"
                    },
                    "epub": {
                        "url": "https://archive.org/download/theiliadofhomer00home/theiliadofhomer00home.epub"
                    },
                    "text": {
                        "url": "https://archive.org/download/theiliadofhomer00home/theiliadofhomer00home_djvu.txt"
                    }
                },
                "preview_url": "https://archive.org/details/theiliadofhomer00home",
                "read_url": "https://archive.org/stream/theiliadofhomer00home",
                "availability": "full"
            }]
        },
        "OLID:OL349749M": {
            "publishers": [{
                "name": "University of Arizona Press"
            }],
            "pagination": "ix, 211 p. ;",
            "identifiers": {
                "lccn": [
                    "98009012"
                ],
                "openlibrary": [
                    "OL349749M"
                ],
                "isbn_10": [
                    "0816519013",
                    "0816519021"
                ],
                "goodreads": [
                    "4464950",
                    "783294"
                ],
                "librarything": [
                    "663877"
                ]
            },
            "table_of_contents": [{
                    "title": "Preface",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Main transpeninsular highway",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Air and fire",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Vintage brandy",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Guinea pigs for turkeys",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Port of illusion",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Curse of the adorers",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Black pearl",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "The search for Mata Hari",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Salt on their tales",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Under the cypress",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Earth day with the governor",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Rancho San Fulano",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                },
                {
                    "title": "Acknowledgments.",
                    "label": "",
                    "pagenum": "",
                    "level": 0
                }
            ],
            "title": "Almost an island",
            "url": "https://openlibrary.org/books/OL349749M/Almost_an_island",
            "classifications": {
                "dewey_decimal_class": [
                    "972/.24"
                ],
                "lc_classifications": [
                    "F1246 .B44 1998"
                ]
            },
            "number_of_pages": 211,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7884757-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7884757-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7884757-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:baja_california",
                    "name": "Baja California"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:baja_california_(mexico)",
                    "name": "Baja California (Mexico)"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:la_paz_(baja_california_sur,_mexico)",
                    "name": "La Paz (Baja California Sur, Mexico)"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:mexico",
                    "name": "Mexico"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:mexico)_la_paz_(baja_california_sur",
                    "name": "Mexico) La Paz (Baja California Sur"
                }
            ],
            "authors": [{
                "url": "https://openlibrary.org/authors/OL219709A/Bruce_Berger",
                "name": "Bruce Berger"
            }],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/social_life_and_customs",
                    "name": "Social life and customs"
                },
                {
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/popular_print_disabled_books",
                    "name": "Popular Print Disabled Books"
                },
                {
                    "url": "https://openlibrary.org/subjects/description_and_travel",
                    "name": "Description and travel"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/travel",
                    "name": "Travel"
                }
            ],
            "subject_people": [{
                "url": "https://openlibrary.org/subjects/person:bruce_berger",
                "name": "Bruce Berger"
            }],
            "key": "/books/OL349749M",
            "by_statement": "Bruce Berger.",
            "publish_date": "1998",
            "subtitle": "travels in Baja California",
            "publish_places": [{
                "name": "Tucson"
            }],
            "ebooks": [{
                "checkedout": true,
                "formats": {},
                "preview_url": "https://archive.org/details/almostislandtrav00berg",
                "borrow_url": "https://openlibrary.org/books/OL349749M/Almost_an_island/borrow",
                "availability": "borrow"
            }]
        },
        "OLID:OL24347578M": {
            "publishers": [{
                "name": "Scribner"
            }],
            "pagination": "509p.",
            "identifiers": {
                "openlibrary": [
                    "OL24347578M"
                ]
            },
            "classifications": {
                "lc_classifications": [
                    "PR4567 A1 1898"
                ]
            },
            "title": "The adventures of Oliver Twist",
            "url": "https://openlibrary.org/books/OL24347578M/The_adventures_of_Oliver_Twist",
            "number_of_pages": 509,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7883999-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7883999-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7883999-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:england",
                    "name": "England"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:great_britain",
                    "name": "Great Britain"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:london",
                    "name": "London"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:london_(england)",
                    "name": "London (England)"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:united_states",
                    "name": "United States"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:italy",
                    "name": "Italy"
                }
            ],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/criminals",
                    "name": "Criminals"
                },
                {
                    "url": "https://openlibrary.org/subjects/london_(england)",
                    "name": "London (England)"
                },
                {
                    "url": "https://openlibrary.org/subjects/readers",
                    "name": "Readers"
                },
                {
                    "url": "https://openlibrary.org/subjects/accessible_book",
                    "name": "Accessible book"
                },
                {
                    "url": "https://openlibrary.org/subjects/bildungsromans",
                    "name": "Bildungsromans"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction",
                    "name": "Fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/overdrive",
                    "name": "OverDrive"
                },
                {
                    "url": "https://openlibrary.org/subjects/german_language",
                    "name": "German language"
                },
                {
                    "url": "https://openlibrary.org/subjects/poor",
                    "name": "Poor"
                },
                {
                    "url": "https://openlibrary.org/subjects/description_and_travel",
                    "name": "Description and travel"
                },
                {
                    "url": "https://openlibrary.org/subjects/poor_children",
                    "name": "Poor children"
                },
                {
                    "url": "https://openlibrary.org/subjects/boys",
                    "name": "Boys"
                },
                {
                    "url": "https://openlibrary.org/subjects/poverty",
                    "name": "Poverty"
                },
                {
                    "url": "https://openlibrary.org/subjects/large_type_books",
                    "name": "Large type books"
                },
                {
                    "url": "https://openlibrary.org/subjects/classic_literature",
                    "name": "Classic Literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/readers_for_new_literates",
                    "name": "Readers for new literates"
                },
                {
                    "url": "https://openlibrary.org/subjects/adaptations",
                    "name": "Adaptations"
                },
                {
                    "url": "https://openlibrary.org/subjects/street_children",
                    "name": "Street children"
                },
                {
                    "url": "https://openlibrary.org/subjects/kidnapping_victims",
                    "name": "Kidnapping victims"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/orphans",
                    "name": "Orphans"
                },
                {
                    "url": "https://openlibrary.org/subjects/english_language",
                    "name": "English language"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_syllabus_project",
                    "name": "open_syllabus_project"
                },
                {
                    "url": "https://openlibrary.org/subjects/manners_and_customs",
                    "name": "Manners and customs"
                },
                {
                    "url": "https://openlibrary.org/subjects/history",
                    "name": "History"
                },
                {
                    "url": "https://openlibrary.org/subjects/social_life_and_customs",
                    "name": "Social life and customs"
                },
                {
                    "url": "https://openlibrary.org/subjects/textbooks_for_foreign_speakers",
                    "name": "Textbooks for foreign speakers"
                },
                {
                    "url": "https://openlibrary.org/subjects/thieves",
                    "name": "Thieves"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                },
                {
                    "url": "https://openlibrary.org/subjects/robbers_and_outlaws",
                    "name": "Robbers and outlaws"
                },
                {
                    "url": "https://openlibrary.org/subjects/identity_(psychology)",
                    "name": "Identity (Psychology)"
                }
            ],
            "subject_people": [{
                "url": "https://openlibrary.org/subjects/person:charles_dickens_(1812-1870)",
                "name": "Charles Dickens (1812-1870)"
            }],
            "key": "/books/OL24347578M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL24638A/Charles_Dickens",
                "name": "Charles Dickens"
            }],
            "publish_date": "1898",
            "by_statement": "With introd. and notes by Andrew Lang.  In one vol. with the original illus",
            "publish_places": [{
                "name": "New York"
            }],
            "subject_times": [{
                "url": "https://openlibrary.org/subjects/time:19th_century",
                "name": "19th century"
            }],
            "ebooks": [{
                "formats": {
                    "pdf": {
                        "url": "https://archive.org/download/adventuresofoli00dick/adventuresofoli00dick.pdf"
                    },
                    "epub": {
                        "url": "https://archive.org/download/adventuresofoli00dick/adventuresofoli00dick.epub"
                    },
                    "text": {
                        "url": "https://archive.org/download/adventuresofoli00dick/adventuresofoli00dick_djvu.txt"
                    }
                },
                "preview_url": "https://archive.org/details/adventuresofoli00dick",
                "read_url": "https://archive.org/stream/adventuresofoli00dick",
                "availability": "full"
            }]
        },
        "OLID:OL33674M": {
            "publishers": [{
                "name": "Avon Twilight"
            }],
            "pagination": "218 p. ;",
            "identifiers": {
                "lccn": [
                    "99016666"
                ],
                "openlibrary": [
                    "OL33674M"
                ],
                "isbn_10": [
                    "038097570X"
                ],
                "oclc": [
                    "41564947"
                ],
                "goodreads": [
                    "1239812"
                ],
                "librarything": [
                    "116036"
                ]
            },
            "subtitle": "a Jane Jeffry mystery",
            "title": "A groom with a view",
            "url": "https://openlibrary.org/books/OL33674M/A_groom_with_a_view",
            "classifications": {
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "lc_classifications": [
                    "PS3553.H85 G7 1999"
                ]
            },
            "number_of_pages": 218,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7907989-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7907989-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7907989-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:chicago_(ill.)",
                    "name": "Chicago (Ill.)"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:illinois",
                    "name": "Illinois"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:chicago",
                    "name": "Chicago"
                }
            ],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/women_detectives",
                    "name": "Women detectives"
                },
                {
                    "url": "https://openlibrary.org/subjects/popular_print_disabled_books",
                    "name": "Popular Print Disabled Books"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/single_mothers",
                    "name": "Single mothers"
                },
                {
                    "url": "https://openlibrary.org/subjects/jane_jeffry_(fictitious_character)",
                    "name": "Jane Jeffry (Fictitious character)"
                },
                {
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction",
                    "name": "Fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/suburban_life",
                    "name": "Suburban life"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                },
                {
                    "url": "https://openlibrary.org/subjects/accessible_book",
                    "name": "Accessible book"
                }
            ],
            "publish_date": "1999",
            "key": "/books/OL33674M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL21264A/Jill_Churchill",
                "name": "Jill Churchill"
            }],
            "by_statement": "Jill Churchill.",
            "publish_places": [{
                "name": "New York"
            }],
            "ebooks": [{
                "checkedout": true,
                "formats": {},
                "preview_url": "https://archive.org/details/groomwithviewj00chur",
                "borrow_url": "https://openlibrary.org/books/OL33674M/A_groom_with_a_view/borrow",
                "availability": "borrow"
            }]
        },
        "OLID:OL7193048M": {
            "publishers": [{
                "name": "University Press"
            }],
            "pagination": "xxxviii, 254 p., [3] leaves of plates :",
            "subtitle": "with the Finnsburg fragment",
            "links": [{
                "url": "http://greenehamlet.com/beowulf.html",
                "title": "Resources for the Study of Beowulf"
            }],
            "title": "Beowulf",
            "url": "https://openlibrary.org/books/OL7193048M/Beowulf",
            "classifications": {
                "lc_classifications": [
                    "PR1580 W8"
                ]
            },
            "identifiers": {
                "openlibrary": [
                    "OL7193048M"
                ]
            },
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7883977-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7883977-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7883977-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:scandinavia",
                    "name": "Scandinavia"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:geatland",
                    "name": "Geatland"
                }
            ],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/hero",
                    "name": "hero"
                },
                {
                    "url": "https://openlibrary.org/subjects/epic_poem",
                    "name": "epic poem"
                },
                {
                    "url": "https://openlibrary.org/subjects/old_english",
                    "name": "Old English"
                },
                {
                    "url": "https://openlibrary.org/subjects/poetry",
                    "name": "poetry"
                },
                {
                    "url": "https://openlibrary.org/subjects/dragon",
                    "name": "dragon"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/anglo-saxon",
                    "name": "Anglo-Saxon"
                }
            ],
            "publish_date": "1914",
            "key": "/books/OL7193048M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL2604010A/Beowulf",
                "name": "Beowulf"
            }],
            "by_statement": "edited by A.J. Wyatt.",
            "publish_places": [{
                "name": "Cambridge"
            }],
            "subject_times": [{
                "url": "https://openlibrary.org/subjects/time:the_middle_ages",
                "name": "The Middle Ages"
            }],
            "ebooks": [{
                "formats": {
                    "pdf": {
                        "url": "https://archive.org/download/beowulfwithfinns00beowuoft/beowulfwithfinns00beowuoft.pdf"
                    },
                    "epub": {
                        "url": "https://archive.org/download/beowulfwithfinns00beowuoft/beowulfwithfinns00beowuoft.epub"
                    },
                    "text": {
                        "url": "https://archive.org/download/beowulfwithfinns00beowuoft/beowulfwithfinns00beowuoft_djvu.txt"
                    }
                },
                "preview_url": "https://archive.org/details/beowulfwithfinns00beowuoft",
                "read_url": "https://archive.org/stream/beowulfwithfinns00beowuoft",
                "availability": "full"
            }]
        },
        "OLID:OL7950349M": {
            "publishers": [{
                "name": "Pocket"
            }],
            "identifiers": {
                "isbn_13": [
                    "9780743453035"
                ],
                "openlibrary": [
                    "OL7950349M"
                ],
                "isbn_10": [
                    "0743453034"
                ],
                "goodreads": [
                    "1139811"
                ],
                "librarything": [
                    "1074514"
                ]
            },
            "subtitle": "A Novel",
            "weight": "9.6 ounces",
            "title": "Break No Bones",
            "url": "https://openlibrary.org/books/OL7950349M/Break_No_Bones",
            "number_of_pages": 480,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/4698487-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/4698487-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/4698487-M.jpg"
            },
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/forensic_anthropology",
                    "name": "Forensic anthropology"
                },
                {
                    "url": "https://openlibrary.org/subjects/temperance_brennan_(fictitious_character)",
                    "name": "Temperance Brennan (Fictitious character)"
                },
                {
                    "url": "https://openlibrary.org/subjects/murder",
                    "name": "Murder"
                },
                {
                    "url": "https://openlibrary.org/subjects/popular_print_disabled_books",
                    "name": "Popular Print Disabled Books"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/ex-husbands",
                    "name": "Ex-husbands"
                },
                {
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/women_forensic_anthropologists",
                    "name": "Women forensic anthropologists"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction",
                    "name": "Fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/cemeteries",
                    "name": "Cemeteries"
                },
                {
                    "url": "https://openlibrary.org/subjects/american_suspense_fiction",
                    "name": "American Suspense fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/missing_persons",
                    "name": "Missing persons"
                },
                {
                    "url": "https://openlibrary.org/subjects/excavations_(archaeology)",
                    "name": "Excavations (Archaeology)"
                },
                {
                    "url": "https://openlibrary.org/subjects/internet_archive_wishlist",
                    "name": "Internet Archive Wishlist"
                }
            ],
            "publish_date": "August 21, 2007",
            "key": "/books/OL7950349M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL24769A/Kathy_Reichs",
                "name": "Kathy Reichs"
            }],
            "excerpts": [{
                "comment": "",
                "text": "NEVER FAILS. YOU'RE WRAPPING UP THE OPERATION WHEN SOMEone blunders onto the season's big score.",
                "first_sentence": true
            }],
            "ebooks": [{
                "checkedout": false,
                "formats": {},
                "preview_url": "https://archive.org/details/breaknobones00kath",
                "borrow_url": "https://openlibrary.org/books/OL7950349M/Break_No_Bones/borrow",
                "availability": "borrow"
            }]
        },
        "OLID:OL979600M": {
            "publishers": [{
                "name": "Oxford University Press"
            }],
            "pagination": "xli, 411, 35 p. :",
            "identifiers": {
                "lccn": [
                    "96017031"
                ],
                "openlibrary": [
                    "OL979600M"
                ],
                "isbn_10": [
                    "0195101383",
                    "0195090888"
                ],
                "librarything": [
                    "2261"
                ],
                "goodreads": [
                    "1050796",
                    "1412051"
                ]
            },
            "classifications": {
                "dewey_decimal_class": [
                    "813/.4"
                ],
                "lc_classifications": [
                    "PS1316 .A1 1996"
                ]
            },
            "links": [{
                "url": "https://bukudbp.com/collections/novel-cerpen-drama/products/anak-raja-dengan-anak-papa",
                "title": "Laman Web Dewan Bahasa & Pustaka"
            }],
            "title": "The prince and the pauper",
            "url": "https://openlibrary.org/books/OL979600M/The_prince_and_the_pauper",
            "notes": "Includes bibliographical references.",
            "number_of_pages": 411,
            "cover": {
                "small": "https://covers.openlibrary.org/b/id/7884580-S.jpg",
                "large": "https://covers.openlibrary.org/b/id/7884580-L.jpg",
                "medium": "https://covers.openlibrary.org/b/id/7884580-M.jpg"
            },
            "subject_places": [{
                    "url": "https://openlibrary.org/subjects/place:london_(england)",
                    "name": "London (England)"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:great_britain",
                    "name": "Great Britain"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:england",
                    "name": "England"
                },
                {
                    "url": "https://openlibrary.org/subjects/place:mistaken_identity",
                    "name": "Mistaken identity"
                }
            ],
            "subjects": [{
                    "url": "https://openlibrary.org/subjects/in_library",
                    "name": "In library"
                },
                {
                    "url": "https://openlibrary.org/subjects/readers",
                    "name": "Readers"
                },
                {
                    "url": "https://openlibrary.org/subjects/accessible_book",
                    "name": "Accessible book"
                },
                {
                    "url": "https://openlibrary.org/subjects/fiction",
                    "name": "Fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/overdrive",
                    "name": "OverDrive"
                },
                {
                    "url": "https://openlibrary.org/subjects/poor",
                    "name": "Poor"
                },
                {
                    "url": "https://openlibrary.org/subjects/kings_and_rulers",
                    "name": "Kings and rulers"
                },
                {
                    "url": "https://openlibrary.org/subjects/impostors_and_imposture",
                    "name": "Impostors and imposture"
                },
                {
                    "url": "https://openlibrary.org/subjects/poor_children",
                    "name": "Poor children"
                },
                {
                    "url": "https://openlibrary.org/subjects/boys",
                    "name": "Boys"
                },
                {
                    "url": "https://openlibrary.org/subjects/large_type_books",
                    "name": "Large type books"
                },
                {
                    "url": "https://openlibrary.org/subjects/classic_literature",
                    "name": "Classic Literature"
                },
                {
                    "url": "https://openlibrary.org/subjects/princes",
                    "name": "Princes"
                },
                {
                    "url": "https://openlibrary.org/subjects/adventure_and_adventurers",
                    "name": "Adventure and adventurers"
                },
                {
                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
                    "name": "Open Library Staff Picks"
                },
                {
                    "url": "https://openlibrary.org/subjects/mistaken_identity",
                    "name": "Mistaken identity"
                },
                {
                    "url": "https://openlibrary.org/subjects/lookalikes",
                    "name": "Lookalikes"
                },
                {
                    "url": "https://openlibrary.org/subjects/adventure_stories",
                    "name": "Adventure stories"
                },
                {
                    "url": "https://openlibrary.org/subjects/social_classes",
                    "name": "Social classes"
                },
                {
                    "url": "https://openlibrary.org/subjects/history",
                    "name": "History"
                },
                {
                    "url": "https://openlibrary.org/subjects/juvenile_fiction",
                    "name": "Juvenile fiction"
                },
                {
                    "url": "https://openlibrary.org/subjects/protected_daisy",
                    "name": "Protected DAISY"
                }
            ],
            "subject_people": [{
                    "url": "https://openlibrary.org/subjects/person:edward_vi_king_of_england_(1537-1553)",
                    "name": "Edward VI King of England (1537-1553)"
                },
                {
                    "url": "https://openlibrary.org/subjects/person:edward_vi_king_of_england_(1412-1431)",
                    "name": "Edward VI King of England (1412-1431)"
                }
            ],
            "key": "/books/OL979600M",
            "authors": [{
                "url": "https://openlibrary.org/authors/OL18319A/Mark_Twain",
                "name": "Mark Twain"
            }],
            "publish_date": "1996",
            "by_statement": "Mark Twain ; foreword, Shelley Fisher Fishkin ; introduction, Judith Martin ; afterword, Everett Emerson.",
            "publish_places": [{
                "name": "New York"
            }],
            "subject_times": [{
                "url": "https://openlibrary.org/subjects/time:edward_vi,_1547-1553",
                "name": "Edward VI, 1547-1553"
            }],
            "ebooks": [{
                "formats": {
                    "pdf": {
                        "url": "https://archive.org/download/princeandpauper01twaigoog/princeandpauper01twaigoog.pdf"
                    },
                    "epub": {
                        "url": "https://archive.org/download/princeandpauper01twaigoog/princeandpauper01twaigoog.epub"
                    },
                    "text": {
                        "url": "https://archive.org/download/princeandpauper01twaigoog/princeandpauper01twaigoog_djvu.txt"
                    }
                },
                "preview_url": "https://archive.org/details/princeandpauper01twaigoog",
                "read_url": "https://archive.org/stream/princeandpauper01twaigoog",
                "availability": "full"
            }]
        }
    }];

    // Inject the $controller service to create instances of the controller (MainController) we want to test
    beforeEach(inject(function (_$controller_, _$rootScope_, _Book_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        Book = _Book_;

        MainController = $controller('MainController', {
            $scope: scope,
            Book: Book
        });
    }));

    // Verify our controller exists
    it('should be defined', function () {
        expect(MainController).toBeDefined();
    });
});