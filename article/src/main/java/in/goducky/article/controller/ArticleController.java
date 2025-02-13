package in.goducky.article.controller;

import in.goducky.article.model.Article;
import in.goducky.article.service.ArticleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleController {
    ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping("")
    public List<Article> fetchAllArticles() {
        return articleService.findAll();
    }

    @PostMapping("")
    public void createArticle(@RequestBody Article article) {
        articleService.createArticle(article);
    }

    @GetMapping("/dummy")
    public String fetchDummyArticles() {
        return articleService.parseMd();
    }

}
