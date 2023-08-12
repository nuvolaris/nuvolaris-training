.PHONY: build
build:
	gcsplit -z -f 'out.demo.' -b '%02d.md' demo.md  '/^# /' '{*}'

index:
	@awk 'BEGIN { n=0 } /^# / { printf "demo/out.demo.%02d.md %s\n", n, $$0 ; n++ }' <demo.md
