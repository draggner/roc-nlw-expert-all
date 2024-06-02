var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddSwaggerGen(options =>{
	options.AddSecurityDefinition("Beaser", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
	{
		Description = @"JWT Authorization header using the Bearer Scheme.
		
		Enter 'Bearer' [Space] and then your token in the text input below.
		
		Example: 'Beaser 123abcDEF'",
		Name = "Authorization",
		In = ParaneterLocation.Header,
		Type = SecuritySchemeType.ApiKey,
		Scheme = "Bearer"
	});

	options.AddSecurityRequeriment(new OpenApiSecurityRequeriment
	{
		new OpenApiSecurityScheme
		{
			Reference = new OpenApiReference
			{
				Type = ReferenceType.SecurityScheme,
				Id = "Bearer"
			}
		},
		Scheme = "oauth2",
		Name = "Bearer",
		In = ParameterLocation.Header,
		new List<string>()
	});
});


builder.Services.AddScoped<AuthenticationUserAttribute>();
builder.Services.AddScoped<LoggedUser>();
builder.Services.AddScoped<CreatedOfferUseCase>();

var app = builder.Build();

if (app.Enviromment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run()