package com.example.springBackend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import java.lang.reflect.Array;


@RestController
public class Controller {
    private final RestTemplate restTemplate;
    private static final Logger log = LoggerFactory.getLogger(SpringBackendApplication.class);
    public Controller(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    String quoteOfTheDay;
    String author;
    ObjectMapper mapper = new ObjectMapper();
    JSONObject json;

    // home page
    @GetMapping("/")
    public ModelAndView welcome(Model model) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        try {
            String url = "http://inspirational-quote-service-chatty-civet-xw.bp-paas.otxlab.net/quote";
            String quoteString = this.restTemplate.getForObject(url, String.class);
            json = new JSONObject(quoteString);
            quoteOfTheDay = json.get("quoteOfTheDay").toString();
            author = json.get("author").toString();

        } catch (Exception e) {
            quoteOfTheDay = "If you respect yourself in stressful situations, it will help you see the positive.  It will help you see the message in the mess.";
            author = "Steve Maraboli";
        }
        Quote quote = new Quote(quoteOfTheDay,author);

        String badge_all= "<span class = \"badge badge-primary\">primary</span>\n" +
                "<span class = \"badge badge-success\">success</span>\n" +
                "<span class = \"badge badge-danger\">Danger</span>\n" +
                "<span class = \"badge badge-warning\">Warning</span>\n" +
                "<span class = \"badge badge-info\">Info</span>\n" +
                "<span class = \"badge badge-light\">Light</span>\n" +
                "<span class = \"badge badge-dark\">Dark</span>";
        String badge_example = "<h3>Example <span class = \"badge badge-dark\">New</span></h3>\n" +
                "<h4>Example <span class = \"badge badge-dark\">New</span></h4>\n" +
                "<h5>Example <span class = \"badge badge-dark\">New</span></h5>\n" +
                "<h6>Example <span class = \"badge badge-dark\">New</span></h6>";
        String badge_btn = "<button class = \"button-primary\">\n" +
                "   Notifications <span class = \"badge badge-warning\">4</span>\n" +
                "</button>";
        String button_all = "<button class=\"button-primary\">Primary</button>\n" +
                "<button class=\"button-success\">Success</button>\n" +
                "<button class=\"button-danger\">Danger</button>\n" +
                "<button class=\"button-warning\">Warning</button>\n" +
                "<button class=\"button-info\">Info</button>\n" +
                "<button class=\"button-light\">Light</button>\n" +
                "<button class=\"button-dark\">Dark</button>";

        String card = "<div class = \"card\">\n" +
                "   <div class = \"card-header\"> Front Card</div>\n" +
                "       <div class =\"cardimg\">\n" +
                "           <img th:src=\"@{image/profile_pic.png}\">\n" +
                "       </div>\n" +
                "   <div class = \"card-body\">\n" +
                "       <h3 class= \"card-title\">Profile</h3>\n" +
                "       <p class = \"card-subtitle\">Hover To Flip</p>\n" +
                "       <p class = \"card-text\">Some text</p>\n" +
                "   </div>\n" +
                "   <ul class = \"list-group list-group-flush\">\n" +
                "       <li class = \"list-group-item\">Item 1</li>\n" +
                "       <li class = \"list-group-item\">Item 2</li>\n" +
                "   </ul>\n" +
                "   <div class = \"card-footer\"> Footer </div>\n" +
                "</div>";
        String card_hover = "<div class = \"hover-card\">\n" +
                "   <div class = \"hovered\">\n" +
                "       <div class = \"card-back\"></div>\n" +
                "       <div class = \"card-front\"></div>\n" +
                "   </div>\n" +
                "</div>";

        String media_obj = "<div class=\"block\">\n" +
                "   <img th:src=\"@{image/profile_pic.png}\">\n" +
                "   <h2>Henry</h2>\n" +
                "   <p>I like this comment</p>\n" +
                "</div>\n" +
                "<div class=\"block1\">\n" +
                "   <img th:src=\"@{image/pro_file_re.png}\">\n" +
                "   <h2>John</h2>\n" +
                "   <p>me too!</p>\n" +
                "</div>";
        String navbar_all = "<nav class = \"navbar navbar-light\">\n" +
                "   <a class = \"navbar-brand\">\n" +
                "       Nav Light\n" +
                "   </a>\n" +
                "   <div>\n" +
                "       <a href=\"#\">Home</a>\n" +
                "       <a href=\"#\"><b>Documentation</b></a>\n" +
                "       <a href=\"#\">Examples</a>\n" +
                "   </div>\n" +
                "</nav>\n"+
                "<nav class = \"navbar navbar-dark\">\n" +
                "   <!---Navbar content -->\n"+
                "</nav>\n" +
                "<nav class = \"navbar navbar-primary\">\n" +
                "   <!---Navbar content -->\n"+
                "</nav>\n" +
                "<nav class = \"navbar navbar-transparent\">\n" +
                "   <!---Navbar content -->\n"+
                "</nav>\n";

        String navbar_img = "<nav class = \"navbar navbar-transparent\">\n" +
                "   <img th:src=\"@{image/opentext-logo.png}\">\n" +
                "   <!---Navbar content -->\n"+
                "</nav>\n";

        model.addAttribute("Quotes",quote);
        model.addAttribute("badge_all", badge_all);
        model.addAttribute("badge_example", badge_example);
        model.addAttribute("badge_btn", badge_btn);
        model.addAttribute("button_all", button_all);
        model.addAttribute("card", card);
        model.addAttribute("card_hover", card_hover);
        model.addAttribute("media_obj", media_obj);
        model.addAttribute("navbar_all", navbar_all);
        model.addAttribute("navbar_img", navbar_img);
        return modelAndView;
    }
}

