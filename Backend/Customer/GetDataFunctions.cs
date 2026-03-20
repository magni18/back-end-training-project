using System.Text.Json;

namespace Backend.Customer
{
    public class GetDataFunctions
    {
        public int GetAge(string name)
        {
            var customers = GetCustomers(name);

            if (customers != null)
            {
                foreach (var customer in customers)
                {
                    if(customer.Name == name)
                    {
                        return customer.Age;
                    }
                }
            }

            return -1;
        }

        private Customer[]? GetCustomers(string name)
        {
            try
            {
                var localJson = File.ReadAllText(DebugTestDataConstant.JsonData);
                var customers = JsonSerializer.Deserialize<Customer[]>(localJson);
            
                return customers;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }

            return null;
        }
    }
}