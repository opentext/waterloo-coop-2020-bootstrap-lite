package com.example.springBackend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


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
    @GetMapping("/quote")
    public String getPostsPlainJSON() throws JSONException {
        try {
            String url = "http://quotes.rest/qod.json";
            String quoteString = this.restTemplate.getForObject(url, String.class);
            json = new JSONObject(quoteString);
            JSONObject quote = new JSONObject(json.getJSONObject("contents").getJSONArray("quotes").getString(0));
            quoteOfTheDay = quote.get("quote").toString();
            author = quote.get("author").toString();

        } catch (Exception e) {
            quoteOfTheDay = "Error in accessing quotes";
            author = "Error in accessing Author";
        }

        log.info("Quote has been created:");
        Quote quote1 = new Quote(quoteOfTheDay, author);
        return quote1.toString();
    }
}

