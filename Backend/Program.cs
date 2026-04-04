using Backend.Customer;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var databaseBuilder = new DbContextOptionsBuilder<DatabaseContext>();  

builder.Services.AddDbContext<DatabaseContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

GlobalConstants.WebBuilder = builder;
GlobalConstants.GlobalContext = new DatabaseContext(databaseBuilder.Options);

builder.Services.AddCors(options =>
{
    options.AddPolicy("DevCors", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

app.UseCors("DevCors");

if (app.Environment.IsDevelopment())
{
    GlobalConstants.GlobalContext.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var customerGetter = new GetDataFunctions();
app.MapGet("/customer/age/{name}", customerGetter.GetAge).WithName("GetCustomerAge");
app.MapPut("/customer-set", customerGetter.SetCustomer).WithName("SetCustomer");

app.Run();
