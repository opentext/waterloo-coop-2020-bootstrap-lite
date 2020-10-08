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


@RestController
public class Controller {
    private final RestTemplate restTemplate;
    private static final Logger log = LoggerFactory.getLogger(SpringBackendApplication.class);
    public Controller(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    String quoteOfTheDay;
    String author;
    String buttons_code = "working";
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
        model.addAttribute("Quotes",quote);
        return modelAndView;
    }

}

