
using Microsoft.EntityFrameworkCore;

public class Startup
{
    public WebApplicationBuilder Builder { get; set; }

    public Startup(WebApplicationBuilder builder)
    {
        Builder = builder;

        builder.Services.AddDbContext<DatabaseContext>(options =>
            options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));      
    }
}