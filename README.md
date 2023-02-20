  # UiS DAT310 Web Programming course

This repository is for the 2032 spring edition of the DAT310 Web programming course at the University of Stavanger. 

  - **Intro**: 
  - Introduction [slides](slides/2023-Course_info.pdf)
  - [how to hand in assignments on GitHub](quickfeed.md)
  - [git slides](slides/0-Web-programming-Git.pdf)
  - [Quickfeed](https://uis.itest.run)
  - [Discord server](https://discord.gg/kJzYN82qXt)
  - [List of useful resources](Resources.md)
  - [Assignments](#assignments)
  - [Zoom link](https://stavanger.zoom.us/j/61226439451?pwd=RHdaclpRdjl1OGhtc0F2dTIwek9UQT09) (Passcode: 820254)
  

## Schedule 
| Day | Hour |Room| |
|-----|------|----|-|
|Mon  |8 - 12|E454|Lab|
|Mon  |12 - 14|A101|Forelesning|
|Mon  |16 - 18|E454|Lab|
|Fre  |8 - 10|E102|Forelesning|
|Fre  |10 - 12|E454|Lab|


This is a tentative schedule and will be subject to changes.

| Week | Lecture | Topic                 | Resources                                                                                                                                                                                                                                                                                      |
|-----:|--------:|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    1 |       FR | HTML                  | [Slides](slides/1-1-Web-programming-HTML.pdf) [examples](examples/html/basic/) [exercises](exercises/html/basic/) [solutions](solutions/html/basic/) [video](https://stavanger.instructuremedia.com/embed/f559ea93-4158-41ff-8e3a-a8525838c118) |
|    2 |       MA | CSS I (properties)    | [Slides](slides/2-1-Web-programming-CSS-p1.pdf) [examples](examples/css/properties) [exercises](exercises/css/properties) [solutions](solutions/css/properties) [Video](https://stavanger.instructuremedia.com/embed/9fba90b1-686c-4d02-bfb3-6bbcd79dc5d5) |
|    2 |       FR | CSS II (selectors)    | [Slides](slides/2-2-Web-programming-CSS-p2.pdf) [examples](examples/css/selectors)  [exercises](exercises/css/properties)  [solutions](solutions/css/selectors) [video](https://stavanger.instructuremedia.com/embed/2ddf14fe-223b-4085-a58d-ab4ec7b675c4) |
|    3 |       MA | CSS III (positioning) | [Slides](slides/3-1-Web-programming-CSS-p3.pdf) [examples](examples/css/positioning/)  [exercises](exercises/css/positioning/)  [solutions](solutions/css/positioning/) [old video](https://stavanger.instructuremedia.com/embed/24cc653e-762b-4857-9e4c-d1c327e4acf5) |
|    3 |       FR | CSS III (positioning) |  |
|    4 |       MA | HTML Forms            | [Slides](slides/3-2-Web-programming-HTML-Forms.pdf) [examples](examples/html/forms/)  [exercises](exercises/html/forms/)  [solutions](solutions/html/forms/)                                        |
|    4 |       FR | JavaScript I (basics) | [Slides](slides/4-1-Web-programming-JavaScript-p1.pdf) [examples](examples/js/basics/)  [exercises](exercises/js/basics/)  [solutions](solutions/js/basics/)                                        |
|    5 |       MA | JavaScript II (dom)   | [Slides](slides/4-2-Web-programming-JavaScript-p2.pdf) [examples](examples/js/events_dom/)  [exercises](exercises/js/events_dom/)  [solutions](solutions/js/events_dom/)           |
|    5 |       FR | JavaScript III        | [Slides](slides/5-1-Web-programming-JavaScript-p3.pdf) [examples](examples/js/more/)  [exercises](exercises/js/more/)  [solutions](solutions/js/more/)                             |
|    6 |       MA | Bootstrap Framework   | [Slides](slides/5-2-Web-programming-Bootstrap.pdf) [examples](examples/bootstrap/)  [exercises](exercises/bootstrap/)  [solutions](solutions/bootstrap/)                           |
|    6 |       FR | Vue Framework I       | [Slides](slides/6-2-Web-programming-vue-p1.pdf) [examples](examples/js/vue/)  [exercises](exercises/js/vue/)  [solutions](solutions/js/vue/)                                                        |
|    7 |       MA | Vue Framework II      | [Slides](slides/7-1-Web-programming-vue-p2.pdf) [examples](examples/js/vue2/)  [exercises](exercises/js/vue2/)  [solutions](solutions/js/vue2/)                                    |
|    7 |       FR | Vue Framework III     |  [Slides](slides/7-2-Web-programming-vue-p3.pdf) [examples](examples/js/vue3/) [exercises](exercises/js/vue3/)  [solutions](solutions/js/vue3/)                                     |
|    8 |       MA | JS&Vue Example and CLI    |  [Slides](slides/X-X-Web-programming-vue-example.pdf) [example](examples/js/labyrinth/) [cli examples](examples/js/vue_cli/) [cli exercises](exercises/js/vue_cli/)  [solutions](solutions/js/vue_cli/)                                     |
|    8 |       FR | HTTP                  | [Slides](slides/8-1-Web-programming-HTTP.pdf) [examples](examples/python/http/) [exercises](exercises/python/http/) [solutions](solutions/python/http/)                            |
|    9 |       MA | Flask I (requests)    | [Slides](slides/8-2-Web-programming-Server-p1.pdf) [examples](examples/python/flask) [exercises](exercises/python/flask1/) [solutions](solutions/python/flask1/)                   |
|    9 |       FR | Flask II (templates)  | [Slides](slides/9-1-Web-programming-Server-p2.pdf) [examples](examples/python/flask) [exercises](exercises/python/flask2/) [solutions](solutions/python/flask2/)                                    |
|    10 |       MA | Flask III (database)  | [Slides](slides/9-2-Web-programming-Server-p3.pdf) [examples](examples/python/flask) [exercises](exercises/python/flask3/) [solutions](solutions/python/flask3/)                                    |
|    10 |       FR | JS Async              | [Slides](slides/10-1-Web-programming-JS-async.pdf) [examples](examples/async/js) [exercises](exercises/async/js) [solutions](solutions/async/js)                                   |
|   11 |       MA | AJAX                  | [Slides](slides/11-1-Web-programming-AJAX.pdf) [examples](examples/ajax) [exercises](exercises/ajax) [solutions](solutions/ajax)                                                   |
|   11 |       FR | AJAX & Vue            | [Slides](slides/11-2-Web-programming-AJAX+Vue.pdf) [examples](examples/ajax) [exercises](exercises/ajax) [solutions](solutions/ajax)                                               |
|   12 |       MA | RESTfull APIs         | [Slides](slides/12-1-Web-programming-Flask-APIs.pdf) [examples](examples/ajax) [exercises](exercises/ajax) [solutions](solutions/ajax)                                                              |
|   12 |       FR | Flask IV (cookies)    | [Slides](slides/12-2-Web-programming-Server-p4.pdf) [examples](examples/python/flask4) [exercises](exercises/python/flask4) [solutions](solutions/python/flask4)                    |
|   13 |       MA | Login                 | [Slides](slides/13-1-Web-programming-Server-Login.pdf) [examples](examples/python/flask5) [exercises](exercises/python/flask5) [solutions](solutions/python/flask5)                                                                                                                            |
|   13 |       FR | Accessibility         | [Slides](slides/15-1-Accessibility.pdf) [examples](examples/a11y/table.html)|
|   14 | | No lecture (Easter) | |
|   15 |       MA | No lecture (Easter) | |
|   15 |       FR | Guest lecture | |

## Assignments

To see and handin assignments you need to complete these steps:
1. Create a github user.
2. Join the course on [Quickfeed](https://uis.itest.run)
3. Wait for manual approval.
4. Join the github organization [dat310-2023](https://github.com/dat310-2023)

You can then view assignments at [here](https://github.com/dat310-2023/assignments).

### First assignment:
To allow you to start the first assignment right away, you can see it in the `assignment-1` [folder](assignment-1/)
