using Backend.Customer;
using Microsoft.EntityFrameworkCore;

public class DatabaseContext : DbContext
{
    public DbSet<Customer> Customer { get; set; }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
    : base(options)
    { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (GlobalConstants.WebBuilder == null) return;

        optionsBuilder.UseNpgsql(GlobalConstants.WebBuilder.Configuration.GetConnectionString("DefaultConnection"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>().ToTable("Customer");
    }
}