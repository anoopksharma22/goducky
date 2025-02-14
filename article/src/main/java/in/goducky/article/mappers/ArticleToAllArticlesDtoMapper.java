package in.goducky.article.mappers;

import in.goducky.article.dtos.AllArticlesDto;
import in.goducky.article.model.Article;

public class ArticleToAllArticlesDtoMapper {
    public static AllArticlesDto map(Article article) {
        AllArticlesDto dto = new AllArticlesDto();
        dto.setId(article.getId());
        dto.setTitle(article.getTitle());
        dto.setSummary(article.getSummary());
        dto.setContent(article.getContent().length() > 200
                ? article.getContent().substring(0, 200) + "..."
                : article.getContent());

        dto.setAuthor(article.getAuthor());
        dto.setActive(article.isActive());
        return dto;
    }
}
