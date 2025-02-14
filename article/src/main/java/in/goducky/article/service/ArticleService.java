package in.goducky.article.service;

import com.vladsch.flexmark.util.ast.Node;
import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.data.MutableDataSet;
import in.goducky.article.dtos.AllArticlesDto;
import in.goducky.article.dtos.OneArticlesDto;
import in.goducky.article.mappers.ArticleToAllArticlesDtoMapper;
import in.goducky.article.mappers.ArticleToOneArticlesDtoMapper;
import in.goducky.article.model.Article;
import in.goducky.article.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService {
    ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<AllArticlesDto> findAll() {
        List<AllArticlesDto> allArticlesDto = new ArrayList<>();
        for(Article a: articleRepository.findAll()){
            allArticlesDto.add(ArticleToAllArticlesDtoMapper.map(a));
        }
        return allArticlesDto;
    }

    public void createArticle(Article article) {
        String title = article.getContent().split("\\n")[0].replaceFirst("^#*\\s*", "");
        article.setAuthor("Go Ducky");
        article.setActive(true);
        article.setSummary("dummy");
        article.setTitle(title);
        articleRepository.save(article);
    }

    public String parseMd(String md) {
        MutableDataSet options = new MutableDataSet();
        // uncomment to set optional extensions
        //options.set(Parser.EXTENSIONS, Arrays.asList(TablesExtension.create(), StrikethroughExtension.create()));

        // uncomment to convert soft-breaks to hard breaks
        //options.set(HtmlRenderer.SOFT_BREAK, "<br />\n");

        Parser parser = Parser.builder(options).build();
        HtmlRenderer renderer = HtmlRenderer.builder(options).build();

        // You can re-use parser and renderer instances
        Node document = parser.parse(md);
        return renderer.render(document);
    }

    public OneArticlesDto findById(int id) {
        Article article =  articleRepository.findById(id).orElse(null);
        assert article != null;
        return ArticleToOneArticlesDtoMapper.map(article);
    }

    public String findByIdParsed(int id) {
        Article article =  articleRepository.findById(id).orElse(null);
        assert article != null;
        return parseMd(article.getContent());
    }
}
